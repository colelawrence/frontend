/**
 * Base webpack config used across other specific configs
 */

import path = require('path')
import webpack = require('webpack')
const { dependencies } = require('./app/package.json')
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

export default <webpack.Configuration> {
  externals: Object.keys(dependencies || {}),
  cache: true,

  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve('ts-loader'),
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }]
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: require.resolve('babel-loader'),
      }]
    }]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'renderer.dev.js',
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
      'process.env.API_URL': JSON.stringify('http://localhost:2503')
    }),

    new webpack.NamedModulesPlugin(),

    // new ForkTsCheckerWebpackPlugin({
    //   reportFiles: ['lib/**/*.{ts,tsx}', 'redesign/**/*.{ts,tsx}']
    // }),
  ]
}
