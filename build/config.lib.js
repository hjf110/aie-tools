const path = require("path");
const resolve = dir => path.join(__dirname, "../", dir);

console.log("run lib");

module.exports = {
    outputDir: resolve("dist"),
    configureWebpack: {
        entry: {
            utils: resolve("src/index.ts")
        },
        output: {
            filename: `[name].js`,
            libraryTarget: "umd",
            libraryExport: "default",
            library: "utils",
            globalObject: "this"
        }
    },
    css: {
        extract: {
            filename: `[name].css`
        }
    },
    chainWebpack: config => {
        config.optimization.delete("splitChunks");
        config.plugins.delete("copy");
        config.plugins.delete("preload");
        config.plugins.delete("prefetch");
        config.plugins.delete("html");
        config.plugins.delete("hmr");
        config.entryPoints.delete("app");
    }
};
