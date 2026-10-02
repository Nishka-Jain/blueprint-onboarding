import js from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import tsEslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    languageOptions: {
      parser: tsEslint.parser,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-shadow': 'error',
    },
  },
  {
    ignores: ['**/metro.config.js'],
  },
];
