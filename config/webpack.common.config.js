const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve('./build');
const APP_DIR = path.resolve('./src');
const PUBLIC_DIR = path.resolve('./public');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: PUBLIC_DIR + '/index.html',
    favicon: PUBLIC_DIR + '/favicon.ico',
    filename: 'index.html',
    inject: 'body',
    hash: true,
    minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
    }
});

const config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'app/js/bundle-[hash].[name].js',
        chunkFilename: 'app/js/bundle-[hash].[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "@": APP_DIR
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                //exclude: [path.join(__dirname, '../node_modules')] // write your node_modules path
            },
            {
                test: /\.(png|jpe?g|gif|ico|svg)$/,
                loader: 'file-loader?limit=8000&name=app/images/[hash].[ext]'
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)$/,
                loader: 'file-loader?limit=8000&name=app/fonts/[hash].[ext]'
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/../public')
    },
    plugins: [
        HtmlWebpackPluginConfig
    ]
};

module.exports = config;