module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  ignorePatterns: [
    'node_modules/*',
    'dist',
    'examples'
  ],
  extends: "eslint:recommended",
};
