module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['es-beautifier'],
  'extends': [
    'plugin:es-beautifier/standard',
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
