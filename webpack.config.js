const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');

// const extractSass = new ExtractTextPlugin({
//     filename: '[name].[contenthash].css',
//     disable: process.env.NODE_ENV === 'development'
// });

module.exports = {
  entry: ['babel-polyfill', './app/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: ['babel-loader', 'eslint-loader'] },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [autoprefixer];
            },
          },
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'build/index.html',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'app',
      files: '**/*.scss',
      failOnError: false,
      quiet: false,
    }),
  ],
};
