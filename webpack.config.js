var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
        entry: './src/identifier.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.bundle.js'
        },
        plugins:[
            new HtmlWebpackPlugin({
                title: 'Number to Word Converter',
                template: 'html-loader!./src/index.html',
            })
        ],
        module: {
            loaders: [
                {
                    loader: "babel-loader",

                    // Skip any files outside of your project's `src` directory
                    include: [
                        path.resolve(__dirname, "src"),
                    ],

                    // Only run `.js` and `.jsx` files through Babel
                    test: /\.js?$/,

                    // Options to configure babel with
                    query: {
                        // plugins: ['transform-runtime'],
                        presets: ['env'],
                    }
                },
                {
                    loaders: "style-loader!css-loader",
                    include: [
                        path.resolve(__dirname,'src/assets/css'),
                    ],
                    test: /\.css$/
                }
            ]
        }
};