var debug = require('debug');
var notifier = require('node-notifier');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

var log = debug('webpack:dev');
var compiler = webpack(webpackConfig);

compiler.plugin("done", function (stats) {
    var errors = stats.compilation.errors;
    if (errors.length) {
        try {
            notifier.notify({
                title: errors[0].module.rawRequest.replace('.', NAME),
                message: errors[0].error.message.split(': ').join('\n')
            });
        } catch (e) {
            console.log(errors[0].message)
            console.log(e.message)
        }
    }
});

var server = new WebpackDevServer(compiler, {
    contentBase: './',
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    hot: true,
    quiet: true
});

log("Starting");

server.listen(8080, 'localhost', function (err, result) {
    if (err) {
        log("Error:", err);
    }

    log("Listening on port " + 8080);
});
