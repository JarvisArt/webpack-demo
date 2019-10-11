
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge =require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production', // development 或 production
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'sass-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[name][chunk].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig);