const pluginVue = require('eslint-plugin-vue')
const eslintConfigPrettier = require('@vue/eslint-config-prettier/skip-formatting')

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-reserved-component-names': 'off'
    }
  },
  eslintConfigPrettier
]
