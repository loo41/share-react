const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    target: 'web',
    output: {
        path: __dirname + `/dist`,
        filename: 'share.min.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js$/],
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(
            ['./dist'],
            {
                root: `${__dirname}`,
                verbose: true,
                dry: false,
            },
        ),
        new UglifyJsPlugin(),
    ],
    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all',
        },
    },
};

module.exports = config;
