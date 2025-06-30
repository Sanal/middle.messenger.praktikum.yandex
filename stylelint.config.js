/** @type {import('stylelint').Config} */
export default {
  extends: 'stylelint-config-standard',
  rules: {
    'import-notation': 'string',
    'color-hex-length': 'long',
    'color-function-alias-notation': 'with-alpha',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'define-mixin'] }],
  },
  ignoreFiles: ['**/*.{js,ts}'],
}
