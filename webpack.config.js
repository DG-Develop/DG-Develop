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
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            ["@babel/plugin-transform-runtime"]
                        ]
                    }
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
            {
                type: "asset",
                test: /\.(png|gif|jpg|svg|ttf)$/i,
                generator: {
                    filename: 'assets/[name].[ext]'
                }
            },
            {
                test: /\.(png|gif|jpg|svg|ttf)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[hash].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ]
            }
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
            new TerserPlugin()
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
    performance: {
        hints: false
    }

}