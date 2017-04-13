const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './js/index.js',
        admin: './js/admin.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].entry.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        port: 8090
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'less-loader'
                ]
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
