var OFF = "off";
var WARN = "warn";

module.exports = {
  extends: ["plugin:react/recommended", "plugin:tailwind/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "react/display-name": OFF,
    "react/jsx-sort-props": [
      WARN,
      {
        callbacksLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    "react/jsx-uses-react": OFF,
    "react/prop-types": [OFF],
    "react/react-in-jsx-scope": OFF,
  },
};
