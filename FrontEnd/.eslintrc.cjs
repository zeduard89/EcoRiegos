module.exports = {
  root:true,
  env: {
    "browser": true,
    "es2021": true,
    "node": true
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "standard-with-typescript",
    "eslint-config-prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: ["react", "react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "@typescript-eslint/triple-slash-reference": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-misused-promises": "off"
  }
}