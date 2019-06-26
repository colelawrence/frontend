/* eslint global-require: 0, import/no-dynamic-require: 0 */

/**
 * Build config for development electron renderer process that uses
 * Hot-Module-Replacement
 *
 * https://webpack.js.org/concepts/hot-module-replacement/
 */

import path = require('path')
import fs = require('fs')
import webpack = require('webpack')
import chalk from 'chalk'
import merge = require('webpack-merge')
import { spawn, execSync } from 'child_process'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
import baseConfig from './webpack.config.base'
import CheckNodeEnv from './internals/scripts/CheckNodeEnv'
import MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

CheckNodeEnv('development')

const port = parseInt(process.env.PORT) || 1212
const publicPath = `http://localhost:${port}/dist`
const dll = path.resolve(process.cwd(), 'dll')
const manifest = path.resolve(dll, 'renderer.json')
const appTarget = process.env.APP_TARGET || 'electron'

/**
 * Warn if the DLL is not built
 */
if (!(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log(chalk.black.bgYellow.bold(
    'The DLL files are missing. Sit back while we build them for you with "npm run build-dll"'
  ))
  execSync('npm run build-dll')
}

export default merge.smart(baseConfig, {
  mode: 'development',

  devtool: 'inline-source-map',
  target: 'electron-renderer',

  entry: {
    'react-hot-loader/patch': 'react-hot-loader/patch',
    'webpack-dev-server/client': `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server': 'webpack/hot/only-dev-server',
    'lib/index.js': path.join(__dirname, 'lib/index.tsx'),

    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker'
  },

  output: {
    globalObject: 'self',
    publicPath: `http://localhost:${port}/dist/`
  },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // {
      //   test: /\.global\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         sourceMap: true
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /^((?!\.global).)*\.css$/,
      //   use: [
      //     {
      //       loader: 'style-loader'
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //         sourceMap: true,
      //         importLoaders: 1,
      //         localIdentName: '[name]__[local]__[hash:base64:5]'
      //       }
      //     }
      //   ]
      // },
      // Add SASS support  - compile all .global.scss files and pipe it to style.css
      {
        test: /\.global\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // Add SASS support  - compile all other .scss files and pipe it to style.css
      {
        test: /^((?!\.global).)*\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              // importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // WOFF Font
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      // WOFF2 Font
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff'
          }
        }
      },
      // TTF Font
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/octet-stream'
          }
        }
      },
      // EOT Font
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      // SVG Font
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'image/svg+xml'
          }
        }
      },
      // Common Image Formats
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: 'url-loader'
      }
      // {
      //   test: require.resolve('numbro'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'numbro'
      //   }]
      // },
      // {
      //   test: require.resolve('moment'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'moment'
      //   }]
      // },
      // {
      //   test: require.resolve('pikaday'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'Pikaday'
      //   }]
      // },
      // {
      //   test: require.resolve('zeroclipboard'),
      //   use: [{
      //     loader: 'expose-loader',
      //     options: 'ZeroClipboard'
      //   }]
      // }
    ]
  },

  plugins: [
    new webpack.NormalModuleReplacementPlugin(/(.*)\.APP_TARGET(\.*)/, function (resource) {
      resource.request = resource.request.replace(/\.APP_TARGET/, `.${appTarget}`)
    }),

    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require(manifest),
      sourceType: 'var'
    }),

    /**
     * https://webpack.js.org/concepts/hot-module-replacement/
     */
    new webpack.HotModuleReplacementPlugin({
      // @TODO: Waiting on https://github.com/jantimon/html-webpack-plugin/issues/533
      // multiStep: true
    }),

    new MonacoWebpackPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    /**
     * Create global constants which can be configured at compile time.
     *
     * Useful for allowing different behaviour between development builds and
     * release builds
     *
     * NODE_ENV should be production so that modules do not perform certain
     * development checks
     *
     * By default, use 'development' as NODE_ENV. This can be overriden with
     * 'staging', for example, by changing the ENV variables in the npm scripts
     */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      '__BUILD__': {
        'MODE': JSON.stringify(process.env.NODE_ENV || 'development'),

        'BASE_URL': JSON.stringify('http://localhost:2503'),
        'API_URL': JSON.stringify('http://localhost:2503'),
        'STATIC_ASSETS_URL': JSON.stringify('http://localhost:2503'),
        'ELECTRON': JSON.stringify('true'),
        'SEGMENT_KEY': JSON.stringify('not_a_key'),
        'VERSION': JSON.stringify('0.4.0-dev')
      },

      '__HOT_BUILD_DATE__': JSON.stringify(''),
      '__HOT_PACKAGE_NAME__': JSON.stringify(''),
      '__HOT_VERSION__': JSON.stringify(''),
      '__HOT_BASE_VERSION__': JSON.stringify('')
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],

  node: {
    __dirname: false,
    __filename: false
  },

  devServer: {
    port,
    publicPath,
    compress: true,
    noInfo: true,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: path.join(__dirname, 'dist'),
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100
    },
    historyApiFallback: {
      verbose: true,
      // defaults to false
      // disableDotRule: false
    },
    before () {
      if (process.env.START_HOT) {
        console.log('Starting Main Process...')
        spawn(
          'npm',
          ['run', 'electron:start:dev:main'],
          { shell: true, env: process.env, stdio: 'inherit' }
        )
          .on('close', code => process.exit(code))
          .on('error', spawnError => console.error(spawnError))
      }
    }
  }
})
