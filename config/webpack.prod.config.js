const common = require("./webpack.common.config");
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const PUBLIC_URL = "/";

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: PUBLIC_URL
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, "../src/assets/css/no_module")
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[sha1:hash:hex:8]'
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                include: [
                    /node_modules/,
                    path.resolve(__dirname, "../src/assets/css/no_module")
                ],
                loader: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            minimize: true,
                        },
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: [
                    /node_modules/,
                    path.resolve(__dirname, "../src/assets/scss/no_module")
                ],
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[sha1:hash:hex:8]'
                        }
                    },
                    {loader: "sass-loader"},
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    /node_modules/,
                    path.resolve(__dirname, "../src/assets/scss/no_module")
                ],
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            importLoaders: 1
                        }
                    },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
});