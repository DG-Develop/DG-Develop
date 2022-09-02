const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const Dotenv = require('dotenv-webpack')
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
    entry: './src/index.jsx',
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle.[contenthash].js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.ts', '.js'],
        alias: {
            '@actions': path.resolve(__dirname, 'src/actions'),
            '@assetComponent': path.resolve(__dirname, 'src/assets/components'),
            '@assetContainer': path.resolve(__dirname, 'src/assets/containers'),
            '@static': path.resolve(__dirname, 'src/assets/static'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@asset': path.resolve(__dirname, 'src/assets'),
            '@font': path.resolve(__dirname, 'src/assets/fonts')
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
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
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader',
                    // MediaQueryPlugin.loader,
                    'sass-loader'
                ]
            },
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 name: '[name].[ext]',
            //                 outputPath: 'fonts/'
            //             }
            //         }
            //     ]
            // },
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
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
            //     use: [{
            //         loader: 'file-loader',
            //     }]
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
            // chunkFilename: 'css/[id].css'
        }),
        // new MediaQueryPlugin({
        //     include: [
        //         'Header'
        //     ],
        //     queries: {
        //         'print, screen and (min-width: 1024px)': 'desktop'
        //     }
        // }),
        new CleanWebpackPlugin(),
        // new Dotenv()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            // new TerserPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

}