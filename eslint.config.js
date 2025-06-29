import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  { files: ['**/*.json'], plugins: { json }, language: 'json/json' },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc' },
  { files: ['**/*.json5'], plugins: { json }, language: 'json/json5' },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm' },
  globalIgnores(['node_modules/*', 'dist/*', '**/*.min.js']),
])
