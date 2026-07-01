import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // 1. Chỉ định các file sẽ áp dụng ESLint
  { files: ['**/*.{js,mjs,cjs,ts}'] },

  // 2. Khai báo môi trường chạy code là Node.js
  { languageOptions: { globals: globals.node } },

  // 3. Extends các cấu hình khuyến nghị (JS & TS)
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // 4. Tích hợp cấu hình Prettier (Thay thế cho plugins/extends cũ)
  eslintPluginPrettierRecommended,

  // 5. Cấu hình chi tiết các Rules của bạn
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      // Đồng bộ các cài đặt Prettier cũ của bạn vào đây
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: false,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  },

  // 6. Cấu hình thay thế cho .eslintignore cũ
  {
    ignores: ['node_modules/*', 'dist/*', 'build/*', '.env']
  }
]
