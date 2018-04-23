// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": { path: [ './src/styles', './src' ], extension: '.css' },
    "autoprefixer": {},
    'postcss-advanced-variables': {},
    'postcss-color-function': {},
    'postcss-nesting': {},
    'postcss-nested': {},
    'postcss-media-minmax': {},
    'cssnano': { zindex: false, reduceIdents: false },
  }
}
