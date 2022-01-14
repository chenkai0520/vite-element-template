module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
      extensions: ['.js', '.less', '.json', '.vue'],
    },
  },
};
