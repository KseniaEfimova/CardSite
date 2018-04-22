const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "../css/bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: [
        './assets/js/index.js',
        './assets/scss/app.scss'
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['ie >= 8', 'last 4 version']
                                    })
                                ]
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.ProvidePlugin({
            '$': 'jquery'
        })
    ]
};