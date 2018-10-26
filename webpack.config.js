const path = require('path');

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
