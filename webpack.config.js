const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelPluginProposalClassProperties = require('@babel/plugin-proposal-class-properties');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const filename = ext => isProd ? `bundle.[contenthash].${ext}` : `bundle.${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './index.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core'),
        },
    },
    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 3000,
        hot: isDev,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: 'index.html',
            minify: isProd,
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to: path.resolve(__dirname, 'dist'),
        }]),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev,
                        reloadAll: true,
                    },
                }, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: getJsLoaders(),
            },
        ],
    },
};

function getJsLoaders() {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: [babelPluginProposalClassProperties],
        }}];

    if (isDev) {
        loaders.push('eslint-loader');
    }

    return loaders;
}
