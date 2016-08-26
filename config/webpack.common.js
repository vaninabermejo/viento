const webpack = require('webpack');
const helpers = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');
const METADATA = {
  title: 'AAJ learning Angular2 proof of concept',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = {
  metadata: METADATA,
  entry: {
    'polyfills': './src/polyfills.browser.ts',
    'vendor':    './src/vendor.browser.ts',
    'main':      './src/main.browser.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules'],
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader'
        ],
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: [helpers.root('src/index.html')]
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Hammer: "hammerjs/hammer"
      }),
    new ForkCheckerPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),
    new HtmlElementsPlugin({
      headTags: require('./head-config.common')
    }),
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
