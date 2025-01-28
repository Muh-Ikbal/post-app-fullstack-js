import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigGoogle from 'eslint-config-google';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Aturan global
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
  },
  // Konfigurasi default plugin JS
  pluginJs.configs.recommended,
  // Konfigurasi Google ditambahkan langsung
  {
    ...eslintConfigGoogle,
    rules: {
      // Tambahkan atau override aturan di sini jika diperlukan
    },
  },
];
