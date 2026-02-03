import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

const scssAdditionalData = [
  '@use "sass:color";',
  '@use "shared/styles/variables" as *;',
  '@use "shared/styles/mixins/flex" as *;',
  '@use "shared/styles/mixins/font" as *;',
  '@use "shared/styles/mixins/media" as *;',
  '@use "shared/styles/mixins/spacing" as *;',
].join('\n')

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    ...(mode === 'analyze'
      ? [
          visualizer({
            filename: 'dist/stats.html',
            open: false,
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: scssAdditionalData,
        loadPaths: [resolve(__dirname, 'src')],
      },
    },
  },
}))
