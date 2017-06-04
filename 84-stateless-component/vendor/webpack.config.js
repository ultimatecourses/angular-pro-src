var path = require('path');
var fs = require('fs');

var webpack = require('webpack');
var chalk = require('chalk');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

var context = path.join(__dirname, '../');

var vendor = [
  '@angular/common',
  '@angular/compiler',
  '@angular/core',
  '@angular/forms',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
  'core-js',
  'rxjs',
  'ts-helpers',
  'zone.js'
];

module.exports = {
  cache: true,
  context: context,
  devtool: 'sourcemap',
  entry: {
    vendor: vendor
  },
  performance: {
    hints: false
  },
  output: {
    filename: '[name].js',
    path: __dirname,
    library: '__[name]',
    sourceMapFilename: '[name].map'
  },
  node: {
    fs: 'empty',
    global: false,
    crypto: 'empty'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '[name]-manifest.json'),
      name: '__[name]',
      context: context
    }),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin({
      format: chalk.magenta.bold('build') + ' [' + chalk.green(':bar')+ '] ' + chalk.green.bold(':percent') + ' ' + chalk.yellow.bold(':elapsed seconds') + ' ' + chalk.white(':msg'),
      clear: false
    })
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.join(context, 'node_modules')]
  },
  stats: false
};
