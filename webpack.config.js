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

const config = {
    debug: false,
    recursive: true,
    bail: true,
    //devtool: 'eval'
    devtool: 'hidden-source-map'
    //devtool: 'source-map'
}

const server_loaders = [{
        test: /\.jsx?$/,
        use: [
            'babel-loader',
        ]
    }
];

const common_loaders = [
    {
        test: /\.jsx?$/,
        use: [
            'babel-loader',
        ],
        exclude: /node_modules/
    },
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
                    loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                    options: {
                        modules: true
                    }
                }]
        })
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'less-loader']
        })
    }
];

const env_client = {
  "IS_BROWSER": JSON.stringify(true),
  "ROOT_DIR": JSON.stringify(__dirname)
}

const env_server = {
  "IS_BROWSER": JSON.stringify(false),
  "ROOT_DIR": JSON.stringify(__dirname)
}

const config_client = {
    name: "clientside",
    bail: config.bail,
    devtool: config.devtool,
    entry: [
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public/',
    },
    resolve: resolve_options,
    plugins: [
        new webpack.HotModuleReplacementPlugin({ quiet: true }),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
        new webpack.DefinePlugin(env_client),
        new webpack.LoaderOptionsPlugin({
            debug: config.debug
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            minimize: false,
            debug: false,
            options: {
                postcss: postCSS,
                sassLoader: {
                    // data: '@import "theme/_config.scss";',
                    includePaths: scssIncludePaths
                }
            }
        })
    ],
    module: {
        rules: common_loaders
    },
};

const config_server = {
    name: "serverside",
    bail: config.bail,
    devtool: config.devtool,
    entry: [
        'webpack/hot/poll',
        './server.js'
    ],
    output: {
        path: path.join(__dirname, "public"),
        filename: 'server_bundle.js',
        publicPath: '/public/',
    },
    target: "node",
    resolve: resolve_options,
    plugins: [
        new webpack.DefinePlugin(env_server),
        new webpack.LoaderOptionsPlugin({
            debug: config.debug
        }),
        new ExtractTextPlugin({
            filename: 'server.css',
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                dead_code: true
            },
            output: {
                comments: false,
                semicolons: true
            },
            sourceMap: true,
            mangle: false
        })
    ],
    module: {
        rules: server_loaders
    },
};

module.exports = [
    config_client,
    config_server
];
