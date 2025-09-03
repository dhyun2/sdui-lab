import baseConfig from './eslint.base.mjs';

export default [
  ...baseConfig,

  {
    files: ['**/*.tsx', '**/*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        console: 'readonly',
        setTimeout: 'readonly',
        navigator: 'readonly',
        Blob: 'readonly',
        URL: 'readonly',
        document: 'readonly',
        React: 'readonly',
      },
    },
    plugins: {
      react: (await import('eslint-plugin-react')).default,
      'react-hooks': (await import('eslint-plugin-react-hooks')).default,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React essentials
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-children-prop': 'error',
      'react/no-unescaped-entities': 'error',
      'react/no-unknown-property': 'error',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
