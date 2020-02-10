const path = require('path');

const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');
const combinedLoaders = require('webpack-combine-loaders');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.scss$/,
        loader: combinedLoaders([
          {
            loader: 'style-loader'
          }, 
          {
            loader: 'css-loader',
            query: {
              localIdentName: '[name]__[loader]__[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ])
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss']
  },
}