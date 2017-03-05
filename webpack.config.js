const autoprefixer = require('autoprefixer');
const extractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const precss = require('precss');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      __dirname + "/app/main.js"
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: extractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css!postcss'
        })
      },
      {
        test: /\.less$/,
        loader: extractTextPlugin.extract({
          fallbackLoader: 'style',
          loader: 'css!postcss!less'
        })
      }
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // enable HMR globally
    , new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
    , new webpack.NoEmitOnErrorsPlugin() // не дает перезаписать скрипты при наличии в них ошибок
  ],
  // postcss: [precss, autoprefixer({browsers: ['last 2 versions']})],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true
  }
};