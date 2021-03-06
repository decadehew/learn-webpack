'use strict';

const path = require('path');

module.exports = {
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    app: './src/app.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js'
    filename: '[name].js'
  },
  mode: 'production'
}