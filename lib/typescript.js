var OFF = "off";
var WARN = "warn";
var ERROR = "error";

module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "typescript-sort-keys"],
  rules: {
    "@typescript-eslint/array-type": [
      ERROR,
      {
        default: "generic",
        readonly: "generic",
      },
    ],
    "@typescript-eslint/ban-ts-comment": OFF,
    "@typescript-eslint/ban-ts-ignore": OFF,
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/no-explicit-any": WARN,
    "@typescript-eslint/no-unused-vars": [ERROR, { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": OFF,
    "@typescript-eslint/no-var-requires": OFF,
    "typescript-sort-keys/interface": WARN,
    "typescript-sort-keys/string-enum": WARN,
  },
};
