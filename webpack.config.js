const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

var clientConfig = {
    entry: {
        app: ['./src/client/client.jsx'],
        vendor: ['react', 'react-dom', 'react-router']
    },
    devtool:'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/public/js')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','env']
                }
            }
        ]
    }
};

var serverConfig = {
    target: 'node', // ignore built-in modules like path, fs, etc...
    externals: [nodeExternals()], // ignore all modules in node_modules
    node: {
        __dirname:false // make __dirname resolve correctly for bundle
    },
    entry: {
        server: ['./src/server/server.jsx']
    },
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/server')
    },
    plugins: [
        new webpack.BannerPlugin({
            banner:'require("source-map-support").install();',
            raw: true,
            entryOnly: false
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env']
                }
            }
        ]
    }
};

module.exports = [serverConfig, clientConfig];