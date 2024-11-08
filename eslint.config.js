/** @type {import('eslint').Linter.Config} */
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default {
  languageOptions: {
    globals: {
      require: 'readonly',
      module: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
  },

  plugins: {
    prettier: eslintPluginPrettier,
  },

  rules: {
    'prettier/prettier': 'error', // Активація правил Prettier
  },
};
