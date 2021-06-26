module.exports = {
  extends: [
    '../../.eslintrc.json',
    'plugin:vue/essential',
    '@vue/typescript/recommended',
    'prettier',
  ],
  ignorePatterns: ['!**/*'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
