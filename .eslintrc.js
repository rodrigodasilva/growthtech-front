module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "react-app",
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  plugins: ["jsx-a11y", "prettier"],
  rules: {
    semi: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/forbid-prop-types": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "react/jsx-props-no-spreading": "off",
  },
};
