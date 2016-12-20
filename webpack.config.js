var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:4000',
        'webpack/hot/only-dev-server',
        './src/index.jsx',
    ],

    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/',
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: ['node_modules'],
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loaders: ['file-loader?name=img/[name].[ext]'],
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'stylus-loader'],
            },
        ],
    },

    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.tpl.html',
        }),
    ],

    devServer: {
        port: 4000,
        host: 'localhost',
        hot: true,
        historyApiFallback: true,
    },
}
