const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/index.js',
        admin: './src/js/admin.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].entry.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 8090
    },
    devTool: 'cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
}
