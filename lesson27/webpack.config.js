const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, "src/app"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
    },
    //loaders
    module: {
        rules: [
            //css
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            //images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource' },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve(__dirname, "F:/JS/HomeWork_JS/lesson27/src/index.html"),
        }),
    ],
};
