const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },

    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: process.env.PORT || 3000,
        contentBase: './dist',
        hot: true,
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: false,
            warnings: true,
            publicPath: false,
        },
    },

    output: {
        filename: './js/bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(mp4|webm)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/,
                use: ['xml-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './favicon.ico',
        }),
    ],
}
