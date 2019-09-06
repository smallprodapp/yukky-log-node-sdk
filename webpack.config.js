const path = require('path');

const config = {
  mode: process.env.NODE_ENV || 'development',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  entry: {
    index: path.join(__dirname, './src/main.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '.'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.(html)$/,
        use: ['html-loader'],
      },
    ],
  },
  node: {
    fs: 'empty',
  },
  externals: [],
};

module.exports = config;
