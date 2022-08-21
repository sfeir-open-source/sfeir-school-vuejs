/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  ignorePatterns: ['dist', 'results', 'coverage', '*.d.ts'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/attributes-order': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off'
  }
};
