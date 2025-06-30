import stylelint from 'stylelint'
import postcssNested from 'postcss-nested'
import postcssMixins from 'postcss-mixins'
import postcssCssVariables from 'postcss-css-variables'
import postcssHexrgba from 'postcss-hexrgba'

export default {
  map: false,
  plugins: [
    stylelint(),
    postcssNested(),
    postcssMixins(),
    postcssCssVariables(),
    postcssHexrgba(),
  ],
}
