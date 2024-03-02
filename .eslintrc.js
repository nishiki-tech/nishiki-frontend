module.exports = {
  root: true,
  extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'prettier'],
  plugins: ['simple-import-sort'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    /**
     *  import style
     */
    // no default export
    'import/prefer-default-export': 'off',
    // 'import/no-default-export': 'error',
    // import sort
    'sort-imports': 'off',
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^'], ['^@?\\w'], ['^@(js|image)(/.*|$)'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
    ],
  },
};
