/*eslint-disable no-var */
var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'source-map',

  entry:{
    app: './app.js'
  },

  output: {
    path: __dirname + '/__build__',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },

  resolve: {
    alias: {
      'txregions': path.join(__dirname, '..', 'lib')
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]

}
