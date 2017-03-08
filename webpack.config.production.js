/* eslint-disable no-var */
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
  extensions: ['.js'],
  alias: {
    components: path.resolve(__dirname,'src/components/'),
    containers: path.resolve(__dirname,'src/containers/'),
    consts: path.resolve(__dirname,'src/consts/'),
    managers: path.resolve(__dirname,'src/managers/'),
    common_actions: path.resolve(__dirname,'src/common_actions/')
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
            }
        ]
    }
};
