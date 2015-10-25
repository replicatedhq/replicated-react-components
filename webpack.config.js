var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname),
  entry: './src/index.js',

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 0,
        },
      },
    ],
  },
};
