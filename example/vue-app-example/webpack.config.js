const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');


module.exports  = {
    mode: "development",

    entry: {
        'assets/app': './src/main.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.[hash].js',
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: "localhost",
        port: 8080,
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    localIdentName: '[name]-[local]-[hash:base64:5]',
                    cameCase: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}