var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpackBaseConfig = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var isAnalyze = !!process.env.analyze

var devConfig = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      mode: JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: true,
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../index.html'),
      cache: false,
      inject: true,
      favicon: '',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    // 打包同步代码中引用的node_modules下的代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      },
    }),
    // 打包异步代码中的公共部分
    new webpack.optimize.CommonsChunkPlugin({
      name: 'asyncCommon',
      async: 'asyncCommon',
      minChunks(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) && count >= 2
        );
      },
    }),
    // 提取webpackJsonp公共部分
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      chunks: ['common', 'asyncCommon']
    }),
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: '',
      seed: {
        name: 'My Manifest cache',
        'short_name': 'mm',
        "display": "standalone",
        "orientation": "portrait",
        "start_url": "index.html?launcher=true"
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin('style.[hash:4].css'),
    new CopyWebpackPlugin([
      { from: './src/static', to: './static' }
    ])
  ],
  devtool: 'hidden-source-map',
};

if (isAnalyze) {
  devConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerPort: 8090
  }), )
}

module.exports = merge(webpackBaseConfig, devConfig);
