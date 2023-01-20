const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer')

module.exports = {
  css: ['src/styles.css'],
  plugins: [
    cssnano,
    autoprefixer,
    purgecss({
      content: ['./**/*.html'],
    }),
  ],
}
