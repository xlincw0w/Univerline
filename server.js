const express = require('express')
const path = require('path')

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express()
// const config = require('./webpack.config.js');
// const compiler = webpack(config);

app.use(express.static(path.join(__dirname, 'dist')))

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath,
// }));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Server listenning on port 3000!\n')
})
