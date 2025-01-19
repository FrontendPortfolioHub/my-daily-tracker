import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    env: {
      browser: true,
      es2021: true,
      react: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended', // Добавляем Prettier как последний элемент в extends
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react', 'prettier'],
    rules: {
      // Применяем правила для форматирования с Prettier
      'prettier/prettier': 'error', // Ошибки форматирования будут показываться как ошибки
      'react/prop-types': 'off', // Отключаем проверку prop-types (по желанию)
      indent: ['error', 2], // Отступы в 2 пробела
      quotes: ['error', 'single'], // Одинарные кавычки
      semi: ['error', 'always'], // Обязательная точка с запятой
      'space-before-blocks': ['error', 'always'], // Пробел перед блоками
    },
  },
];
