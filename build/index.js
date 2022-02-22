module.exports =
    process.env.NODE_ENV === "production"
        ? require("./config.lib")
        : require("./config.doc");
