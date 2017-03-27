/* eslint-disable no-var */
'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

const bourbon_paths = require('node-neat').includePaths
const neat_paths = require('node-bourbon').includePaths
const scssIncludePaths = bourbon_paths.concat(neat_paths);

const postCSS = [ autoprefixer({ browsers: ["> 1%", "last 2 versions"] }) ];

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css"
});

const cssloaders = [
    {
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        options: {
            modules: true
        }
    }];

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
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    resolve: resolve_options,
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
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
        }),
        new webpack.DefinePlugin(env_client),
        extractSass
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssloaders
                })
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
};
