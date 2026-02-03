import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))

const scssAdditionalData = [
  '@use "sass:color";',
  '@use "shared/styles/variables" as *;',
  '@use "shared/styles/mixins/flex" as *;',
  '@use "shared/styles/mixins/font" as *;',
  '@use "shared/styles/mixins/media" as *;',
  '@use "shared/styles/mixins/spacing" as *;',
].join('\n')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': resolve(currentDir, '../src'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: scssAdditionalData,
            loadPaths: [resolve(currentDir, '../src')],
          },
        },
      },
    })
  },
}

export default config
