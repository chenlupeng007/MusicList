const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'build.js': './src/index.jsx',
  },
  output: {
    filename: '[name]',
    path: path.join(__dirname, 'public', 'javascripts'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: '/javascripts/',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
    ],
  },
};
