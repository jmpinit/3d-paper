module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'www/js/app.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
            },
        ],
    },
};
