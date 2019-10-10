
const merge =require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production', // development 或 production
  devtool: 'cheap-module-source-map'
}

module.exports = merge(commonConfig, prodConfig);