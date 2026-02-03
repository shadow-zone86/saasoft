import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

const tsOnly = (config) => ({ ...config, files: config.files ?? ['**/*.ts', '**/*.tsx'] })

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.configs.recommended.map(tsOnly),
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.vue'],
      },
      globals: {
        defineOptions: 'readonly',
        defineModel: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/attributes-order': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['src/shared/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { group: ['@/app/**'], message: 'FSD: shared cannot import from app' },
            { group: ['@/pages/**'], message: 'FSD: shared cannot import from pages' },
            { group: ['@/widgets/**'], message: 'FSD: shared cannot import from widgets' },
            { group: ['@/features/**'], message: 'FSD: shared cannot import from features' },
            { group: ['@/entities/**'], message: 'FSD: shared cannot import from entities' },
          ],
        },
      ],
    },
  },
  {
    files: ['src/entities/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { group: ['@/app/**'], message: 'FSD: entities cannot import from app' },
            { group: ['@/pages/**'], message: 'FSD: entities cannot import from pages' },
            { group: ['@/widgets/**'], message: 'FSD: entities cannot import from widgets' },
            { group: ['@/features/**'], message: 'FSD: entities cannot import from features' },
          ],
        },
      ],
    },
  },
  {
    files: ['src/features/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { group: ['@/app/**'], message: 'FSD: features cannot import from app' },
            { group: ['@/pages/**'], message: 'FSD: features cannot import from pages' },
            { group: ['@/widgets/**'], message: 'FSD: features cannot import from widgets' },
          ],
        },
      ],
    },
  },
  {
    files: ['src/widgets/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { group: ['@/app/**'], message: 'FSD: widgets cannot import from app' },
            { group: ['@/pages/**'], message: 'FSD: widgets cannot import from pages' },
          ],
        },
      ],
    },
  },
  {
    files: ['src/pages/**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [{ group: ['@/app/**'], message: 'FSD: pages cannot import from app' }],
        },
      ],
    },
  },
  {
    files: ['**/*.spec.{ts,tsx,js,jsx}'],
    rules: {
      'vue/one-component-per-file': 'off',
      'vue/require-default-prop': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'storybook-static',
      '*.config.js',
      '.storybook/**',
      '_sds/**',
    ],
  },
]
