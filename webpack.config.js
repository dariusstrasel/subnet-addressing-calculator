const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/components/index.js', // JS entry point (adjust according to your file structure)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js', // Generate unique file names for caching
        clean: true // Clean the output directory before each build
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Process JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html', // Your base index.html file
            filename: 'index.html', // The output HTML file
            inject: 'body', // Inject scripts at the end of the <body> tag
        }),
    ],
    mode: 'development', // Use 'production' for production builds
};