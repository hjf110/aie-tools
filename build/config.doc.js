const path = require("path");
const resolve = dir => path.join(__dirname, "../", dir);

console.log("run doc");

module.exports = {
    publicPath: "./",
    devServer: { port: "8000" },
    outputDir: resolve("docs"),
    pages: {
        index: {
            entry: resolve("example/src/main.ts"),
            template: "public/index.html",
            filename: "index.html",
            title: "Index Page",
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },
    chainWebpack: config => {
        config.plugins.delete("prefetch-index");
    }
};
