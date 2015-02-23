var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache: true,
    entry: "./www/src/js/app.js",
    output: {
        path: path.join(__dirname, "www/build/js/"),
        publicPath: "www/",
        filename: "app.js"
    },
    module: {
        // loaders: [
        //     // required to write "require('./style.css')"
        //     { test: /\.css$/,    loader: "style-loader!css-loader" }
        // ]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: "jquery",
            $: "jquery"
        }),
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};