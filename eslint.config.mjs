import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        browser: true
      }
    },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended"
    ],
    plugins: [
      "react-app",
      "@typescript-eslint"
    ],
    rules: {
      // Your custom rules or overrides
    }
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  }, 
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
];