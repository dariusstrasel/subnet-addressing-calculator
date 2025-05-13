const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/components/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Generate unique file names for caching
        clean: true // Clean the output directory before each build
    },
    devtool: 'inline-source-map', // Enable source maps for easier debugging
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'package.json',
                    to: './dist'
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/html/index.html', // Your base index.html file
            filename: 'index.html', // The output HTML file
            inject: 'body', // Inject scripts at the end of the <body> tag
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve static files from 'src'
        },
        compress: true,
        port: 63342,
    },
};