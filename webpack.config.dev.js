'use strict';

var path = require('path');
var webpack = require('webpack');

var ENV = {
  __BUILD__ : {
    PRODUCTION : false,
    DEVELOP : true,

    BASE_URL : JSON.stringify("http:/localhost:4000"),
    API_URL : JSON.stringify("http://localhost:3000"),
    STATIC_ASSETS_URL : JSON.stringify("http://localhost:3000"),
  }
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=//localhost:4000/__qri_io',
    './src/js/index'
  ],
  output: {
    // path: path.join(__dirname, 'dist'),
    path : __dirname,
    filename: 'bundle.js',
    publicPath: '//localhost:4000/static/'
  },
  // resolve: {
  //   alias: {
  //     'react-ace':  path.join(__dirname, '..', 'src', 'ace.jsx')
  //   }
  // },
  plugins: [
    new webpack.DefinePlugin(ENV),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "src","scss")]
  }
};