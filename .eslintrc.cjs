/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    requireConfigFile: false,
    parser: '@typescript-eslint/parser',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // required to lint *.vue files
  plugins: ["vue", "html"],
  // add your custom rules here
  rules: {
    // allow async-await

    // 'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // 'no-tabs': 'off',
    // "indent": [2, "tab", { "SwitchCase": 1 }],
    "generator-star-spacing": "off",
    "vue/script-setup-uses-vars": ["off"],
    "vue/multi-word-component-names": ["off"],
    "vue/no-mutating-props": ["off"],
    "vue/valid-model-definition": ["off"],
    "vue/valid-attribute-name": ["off"],
    "vue/comment-directive": ["off"],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,
  },
};