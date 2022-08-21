const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '..', './build'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './build'),
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('LxndrKrchvtsv - Development mode.'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],
};
