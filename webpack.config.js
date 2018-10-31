const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'build.js': [
      'webpack-hot-middleware/client',
      './src/index.jsx'],
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public', 'javascripts'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|public\/)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'stylesheets/style.css',
    }),
  ],
};
