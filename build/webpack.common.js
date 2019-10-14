const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  new CleanWebpackPlugin()
]

const files = fs.readdirSync(path.resolve(__dirname, '../dll/'))
files.forEach(file => {
  if(/.*\.dll.js/.test(file)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, '../dll', file)
    }))
  }
  if(/.*\.manifest.json/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll', file)
    }))
  }
})

const commonConfig = {
  entry: {
    main: './src/index.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        use: [
          { loader: "babel-loader" },
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 2000
          }
        }
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
        }
      },
    ]
  },
  plugins,
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  performance: false,
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../dist')
  },
}

module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig);
  } else {
    return merge(commonConfig, devConfig);
  }
}