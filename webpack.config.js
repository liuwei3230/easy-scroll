var webpack = require('webpack');
var path = require('path');

module.exports = {
  'entry': './src/index.js',
  'module': {
    'loaders': [{
      'test': /\.js$/,
      'exclude': /node_modules/,
      'loader': 'babel-loader'
    }]
  },
  'output': {
    'path': path.resolve(__dirname, './dist'),
    'publicPath': '/',
    'filename': 'easy-scroll.js',
    'library': 'easyScroll',
    'libraryTarget': 'umd',
    'umdNamedDefine': true
  }
}