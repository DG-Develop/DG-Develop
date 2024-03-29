const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const MediaQueryPlugin = require('media-query-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle.[contenthash].js',
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    { loader: 'css-loader' },
                    MediaQueryPlugin.loader,
                    'sass-loader'
                ]
            },
            {
                type: "asset",
                test: /\.(png|gif|jpg|svg|ttf)$/i,
                generator: {
                    filename: 'assets/[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'DG-Develop',
            template: './public/index.html',
            filename: 'index.html',
            inject: false,
            hash: true,
            favicon: './public/favicon.ico'
            // link: '<link href="css/index-desktop.css" rel="stylesheet" media="(min-width: 1024px)">'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            linkType: 'text/css',
            chunkFilename: 'css/[id].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        }),
        new MediaQueryPlugin({
            include: true,
            queries: {
                'only screen and (min-width: 1024px)': 'desktop',
                'only screen and (min-width: 1440px)': 'desktop_large'
            }
        }),
        new CompressionPlugin({
            test: /\.js$|\.css$/,
            filename: '[path]-[name].gz',
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            },
        },
    },
    performance: {
        hints: false
    }
}