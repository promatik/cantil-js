const path = require('path');

module.exports = {
  entry: './src/tiny.js',
  mode: 'production',
  output: {
    filename: 'tiny.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};