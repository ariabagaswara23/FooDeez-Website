const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash:8].js",
        chunkFilename: "[name].[contenthash:8].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]",
                    outputPath: "assets/img",
                    esModule: false,
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [autoprefixer()],
                        },
                    },
                    "sass-loader",
                ],
            },
            { test: /.mjs$/, include: /node_modules/, type: "javascript/auto" },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash:8].css",
            chunkFilename: "[name].[contenthash:8].css",
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
        }),
        new ImageminWebpackPlugin({
            plugins: [
                ImageminMozjpeg({
                    quality: 50,
                    progressive: true,
                }),
                imageminPngquant({
                    quality: [0.3, 0.5],
                }),
            ],
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            'vue': '@vue/runtime-dom'
        }
    },
    optimization: {
        moduleIds: "hashed",
        runtimeChunk: "single",
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -10,
                    chunks: "all",
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    }
};
