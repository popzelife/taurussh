const path = require('path');

module.exports = {
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
    useJSXTextNode: true,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-max-props-per-line': [2, {maximum: 2, when: 'always'}],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    '@typescript-eslint/indent': [2, 2],
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        // '@typescript-eslint/explicit-member-accessibility': 0,
        // '@typescript-eslint/explicit-function-return-type': 0,
      }
    }
  ]
};
