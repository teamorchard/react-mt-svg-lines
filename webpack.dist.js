var path = require('path')
// var webpack = require('webpack')

module.exports = {
  entry: './src/MtSvgLines.js',

  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },

  externals: {
    'react': 'react'
  }

  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     minimize:   true,
  //     compressor: { warnings: false }
  //   })
  // ]
}
