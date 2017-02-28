/* eslint-disable no-var */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: "css-loader"
                })
            }
        ]
    }
};
