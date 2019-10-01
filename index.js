module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'react-hooks'
  ],
  extends: [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  globals: {
    __DEV__: true
  },
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'import/no-unresolved': 'off',
    'jsx-quotes': 'off',
    'no-confusing-arrow': 'off',
    'react/prop-types': ['error', { ignore: ['navigation'] }],
    'space-before-function-paren': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 'off',
    'react/jsx-one-expression-per-line': [1, { 'allow': 'literal'}],
    'camelcase': 'off',
    'global-require': 'off',
    'no-shadow': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  }
};
