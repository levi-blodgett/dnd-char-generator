const path = require("path");

module.exports = {
  entry: "./build/logical_version.js",
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
  },
};
