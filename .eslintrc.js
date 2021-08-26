const eslintrc = {
  extends: [require.resolve('@mhc/fabric/lib/ts-eslint')],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {},
  settings: {
    react: {
      version: 'latest', // 防止非react项目的版本警告：https://github.com/yannickcr/eslint-plugin-react/issues/2276
    }
  }
}

module.exports = eslintrc
