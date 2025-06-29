module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: ['eslint:recommended', '@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'newline-before-return': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'prefer-const': 'error',
    'no-console': 'warn'
  },
  env: {
    node: true,
    es2022: true
  }
}
