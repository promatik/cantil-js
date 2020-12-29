const path = require('path');

module.exports = [
  {
    entry: './src/cantil.js',
    mode: 'production',
    output: {
      filename: 'cantil.min.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
];