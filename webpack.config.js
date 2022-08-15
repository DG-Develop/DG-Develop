const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const Dotenv = require('dotenv-webpack')
const MediaQueryPlugin = require('media-query-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[contenthash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@actions': path.resolve(__dirname, 'src/actions'),
            '@assetComponent': path.resolve(__dirname, 'src/assets/components'),
            '@assetContainer': path.resolve(__dirname, 'src/assets/containers'),
            '@static': path.resolve(__dirname, 'src/assets/static'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@asset': path.resolve(__dirname, 'src/assets'),
        }
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
                    MediaQueryPlugin.loader,
                    'sass-loader'
                ]
            },
            {
                type: "asset",
                test: /\.(png|gif|jpg|svg)$/i,
                generator:{
                    filename: 'assets/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[contenthash].css'
        }),
        new MediaQueryPlugin({
            queries: {
                'print, screen and (min-width: 1024px)': 'desktop'
            }
        })
        // new Dotenv()
    ]

}