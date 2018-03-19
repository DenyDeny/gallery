const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT || 3000
module.exports = {
    mode: 'development',
    entry: {
        vendor: ['semantic-ui-react'],
        app: ['react-hot-loader/patch', './src/index.js'],
    },
    output: {
        filename: '[name].[hash].js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            camelCase: true,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'sass-loader', // compiles Sass to CSS
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico',
        }),
    ],
    devServer: {
        host: 'localhost',
        port,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
}
