/*
 * @Author: 韩卿 
 * @Date: 2017-11-17 18:36:45 
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 04:36:42
 */

var path = require('path');
var friendlyFormatter = require('eslint-friendly-formatter');

var webpackConfig = {
  entry: {
    main: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash:7].js',
    chunkFilename: 'chunks/[name].[chunkhash:7].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'eslint',
            options: {
              formatter: friendlyFormatter, // 编译后错误报告格式
            }
          }
        ],
        enforce: 'pre',
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel'],
        exclude: /node_modules/,
        // include: path.join(__dirname, '../src'),
      }, {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'postcss-loader'
          }
        ]
      }, {
        test: /\.less$/,
        // exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'style-loader',
            // options: { sourceMap: true }            
          }, {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }, {
            loader: 'less-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  resolve: {
    extensions: [
      '.js', '.jsx', '.less', '.css'
    ],
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      components: path.join(__dirname, '../src/components'),
      '@struct': path.join(__dirname, '../src/struct'),
      '@router': path.join(__dirname, '../src/router'),
      '@history': path.join(__dirname, '../src/router/history.js'),
      '@redux': path.join(__dirname, '../src/redux'),
      '@api': path.join(__dirname, '../src/api'),
      '@ajax': path.join(__dirname, '../src/utils/ajax.js'),
      '@fetch-redux': path.join(__dirname, '../src/utils/fetch-redux.js'),
      actions: path.join(__dirname, '../src/redux/actions'),
      reducers: path.join(__dirname, '../src/redux/reducers'),
      style: path.join(__dirname, '../src/style'),
      '@utils': path.join(__dirname, '../src/utils'),
      '@config': path.join(__dirname, '../src/config'),
      '@businessComponents': path.join(__dirname, '../src/businessComponents'),
    }
  }
};

module.exports = webpackConfig;
