/* eslint-disable no-var */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: __dirname,
        filename: 'public/bundle.js',
        publicPath: '/public/'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true}),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                })
            }
        ]
    },
};
