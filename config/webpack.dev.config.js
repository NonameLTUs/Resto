const common = require("./webpack.common.config");
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
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
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }
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
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    },
                    {loader: "sass-loader"}
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    /node_modules/,
                    path.resolve(__dirname, "../src/assets/scss/no_module"),
                ],
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            importLoaders: 1
                        }
                    },
                    {loader: "sass-loader"}
                ]
            }
        ]
    }
});