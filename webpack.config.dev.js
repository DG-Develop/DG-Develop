const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MediaQueryPlugin = require('media-query-plugin');
/* const Dotenv = require('dotenv-webpack') */

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        hot: true,
        open: true,
        port: 3008,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
                    'css-loader',
                    // MediaQueryPlugin.loader,
                    'sass-loader'
                ]
            },
            {
                type: "asset",
                test: /\.(png|gif|jpg|svg)$/i,
                generator: {
                    filename: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        // new MediaQueryPlugin({
        //     include:[
        //         'Header'
        //     ],
        //     queries: {
        //         'print, screen and (min-width: 1024px)': 'desktop'
        //     }
        // })
        /* new Dotenv() */
    ]

}