import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettierConfig,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
  {
    // Test files have vitest globals
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        // vitest globals (describe, it, expect, etc. are imported explicitly)
      },
    },
  },
  {
    ignores: ["dist/", "node_modules/", "src/testing.js"],
  },
];
