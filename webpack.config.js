var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: false,
    entry: "./www/src/js/app.js",
    output: {
        path: path.join(__dirname, "www/build/js/"),
        publicPath: "www/",
        filename: "app.js"
    },
    module: {
        loaders: [
            // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.sass$/, loader: "style!css!sass?indentedSyntax=true"},
            {test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['image?bypassOnDebug=false&optimizationLevel=7&interlaced=false?progressive=true']},
        ]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};