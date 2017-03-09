/* eslint-disable no-var */
'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

const resolve_options = {
    extensions: ['.js'],
    alias: {
        'components': path.join(__dirname,'src','components'),
        'containers': path.join(__dirname,'src','containers'),
        'consts': path.join(__dirname,'src','consts'),
        'managers': path.join(__dirname,'src','managers'),
        'common_actions': path.join(__dirname,'src','common_actions')
    }
};

const env_client = {
  "IS_BROWSER": JSON.stringify(true),
  "ROOT_DIR": JSON.stringify(__dirname)
}

const env_server = {
  "IS_BROWSER": JSON.stringify(false),
  "ROOT_DIR": JSON.stringify(__dirname)
}

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    resolve: resolve_options,
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
        new webpack.DefinePlugin(env_client)

    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: ()=> { return [autoprefixer] } }
                    }
                ],
            }
        ]
    },
};
