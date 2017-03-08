/* eslint-disable no-var */
'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssloaders = [
    {
        loader: 'css-loader',
        options: {
            modules: true
        }
    }];

var resolve_options = {
  alias: {
    Components: path.resolve(__dirname,'/src/components/'),
    Containers: path.resolve(__dirname,'/src/containers/'),
    Consts: path.resolve(__dirname,'/src/consts/'),
    Managers: path.resolve(__dirname,'/src/managers/'),
    Common_actions: path.resolve(__dirname,'/src/common_actions/')
  }
};

var env_client = {
  "IS_BROWSER": JSON.stringify(true),
  "ROOT_DIR": JSON.stringify(__dirname)
}

var env_server = {
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
    resolve: {
        alias: {
            'components': path.join(__dirname,'src','components'),
            'containers': path.join(__dirname,'src','containers'),
            'consts': path.join(__dirname,'src','consts'),
            'managers': path.join(__dirname,'src','managers'),
            'common_actions': path.join(__dirname,'src','common_actions')
        }
    },
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true}),
        // new webpack.PrefetchPlugin('react'),
        // new webpack.PrefetchPlugin('react-dom'),
        new webpack.DefinePlugin(env_client),
        // new ManifestPlugin(),
        // new ChunkManifestPlugin(webpack_manifest.chunk),
        // new webpack.optimize.OccurenceOrderPlugin(true),
        // new webpack.optimize.CommonsChunkPlugin(webpack_manifest.commons),

    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: cssloaders
                })
            }
        ]
    },
};
