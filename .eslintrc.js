module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:wdio/recommended',
    'plugin:mocha/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': ['error'],
    'mocha/no-mocha-arrows': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': [
      'error',
      'WithStatement',
      "BinaryExpression[operator='in']",
    ],
    'guard-for-in': 0,
  },

  plugins: ['mocha', 'eslint-plugin-prettier', 'wdio'],
}
