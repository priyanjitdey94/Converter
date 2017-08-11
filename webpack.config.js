var path = require('path');
var webpack = require('webpack');

module.exports = {
        entry: './src/runner.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'main.bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin()
        ],
    module: {
        loaders: [{
            //  test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    }
};