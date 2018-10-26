const path = require('path');

const config = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: {
        'bundle': path.join(__dirname, 'app', 'main.js')
    },
    output: {
        path: path.join(__dirname, 'dist'), 
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};

module.exports = config;