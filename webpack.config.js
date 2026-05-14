import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./src/index.js",
  devServer: {
    static: {
      directory: __dirname,
    },
  },
};
