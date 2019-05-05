const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
        rules: [
          {
            test: /\.(css|scss)$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use:  [
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [
                      autoprefixer()
                    ],
                    sourceMap: true
                  }
                },
                'sass-loader'
              ]
            })
          }
        ],
    }
})