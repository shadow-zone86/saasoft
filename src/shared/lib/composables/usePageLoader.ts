import { ref, onMounted, onBeforeUnmount } from 'vue'

export interface PageLoaderConfig {
  logoPath: string
  logoAlt: string
  durationMs: number
  progressFrom: number
  progressTo: number
  minVisibleMs: number
  hideDelayMs: number
  fallbackTimeoutMs: number
  logoMaxWidthPx: number
  logoMaxHeightPx: number
}

export interface UsePageLoaderOptions {
  config?: Partial<PageLoaderConfig>
}

const defaultConfig: PageLoaderConfig = {
  logoPath: '/logo-main.png',
  logoAlt: 'Загрузка',
  durationMs: 1200,
  progressFrom: 0,
  progressTo: 82,
  minVisibleMs: 900,
  hideDelayMs: 250,
  fallbackTimeoutMs: 8000,
  logoMaxWidthPx: 140,
  logoMaxHeightPx: 140,
}

export function usePageLoader(options: UsePageLoaderOptions = {}) {
  const config: PageLoaderConfig = { ...defaultConfig, ...options.config }

  const isLoading = ref<boolean>(true)
  const progressWidth = ref<string>('0%')
  const progressRef = ref<HTMLDivElement | null>(null)

  let rafId = 0
  let fallbackTimeoutId: number | null = null
  let loadHandler: (() => void) | null = null

  onMounted(() => {
    const mountedAtMs = Date.now()
    let startTime: number | null = null
    let pageLoaded = false

    const animate = (currentTime: number): void => {
      if (!startTime) startTime = currentTime
      const elapsedMs = currentTime - startTime
      const progressFactor = Math.min(elapsedMs / config.durationMs, 1)
      const width = Math.floor(progressFactor * (config.progressTo - config.progressFrom) + config.progressFrom)
      progressWidth.value = width + '%'

      if (pageLoaded) {
        progressWidth.value = '100%'
        return
      }
      if (progressFactor < 1) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)

    loadHandler = (): void => {
      pageLoaded = true
      progressWidth.value = '100%'
      const elapsedVisibleMs = Date.now() - mountedAtMs
      const minLeftMs = Math.max(config.minVisibleMs - elapsedVisibleMs, 0)
      setTimeout(() => {
        isLoading.value = false
      }, Math.max(config.hideDelayMs, minLeftMs))
    }

    if (document.readyState === 'complete') {
      loadHandler()
    } else {
      window.addEventListener('load', loadHandler)
    }

    fallbackTimeoutId = window.setTimeout(() => {
      isLoading.value = false
    }, config.fallbackTimeoutMs)
  })

  onBeforeUnmount(() => {
    if (rafId) cancelAnimationFrame(rafId)
    if (loadHandler) window.removeEventListener('load', loadHandler)
    if (fallbackTimeoutId !== null) window.clearTimeout(fallbackTimeoutId)
  })

  return {
    isLoading,
    progressWidth,
    progressRef,
    config,
  }
}

