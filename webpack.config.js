const path = require('path');
const webpack = require('webpack');

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
    publicPath: '/javascripts/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
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
    ],
  },
};
