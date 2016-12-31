var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const isProd = (process.env.NODE_ENV === 'production');


module.exports = {
    entry: isProd
        ? {
            main: './src/index',
            common: [
                'babel-polyfill',
                'react',
                'react-dom',
                'redux',
                'react-redux',
            ],
        }
        : [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:4000',
            'webpack/hot/only-dev-server',
            './src/index',
        ],

    output: {
        filename: isProd
            ? 'main.[chunkhash:6].js'
            : 'main.js',
        path: path.join(__dirname, 'public'),
        publicPath: '/',
    },

    module: {
        loaders: [
            { test: /.jsx?$/, loader: 'babel-loader', exclude: ['node_modules'] },
            { test: /\.jpe?g$|\.gif$|\.png$/, loaders: ['file-loader?name=img/[name].[ext]'] },
            { test: /\.mp3$/, loaders: ['file-loader?name=audio/[name].[ext]'] },
            (isProd
                ? { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader') }
                : { test: /\.styl$/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] }
            ),
        ],
    },

    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
    },

    plugins: isProd
        ? [
            new CleanWebpackPlugin([path.resolve(__dirname, 'public')]),
            new ExtractTextPlugin('main.[contenthash:6].css', { allChunks: true }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new WebpackMd5Hash(),
            new webpack.optimize.CommonsChunkPlugin('common', 'common.[chunkhash:6].js'),
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: {
                    warnings: false,
                    drop_console: true,
                },
                output: {
                    comments: false,
                },
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                },
                __DEV__: JSON.stringify(false),
            }),
            new HtmlWebpackPlugin({
                inject: true,
                template: './src/index.tpl.html',
            }),
        ]
        : [
            new ExtractTextPlugin('main.css'),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            new webpack.DefinePlugin({
                __DEV__: JSON.stringify(true),
            }),
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
