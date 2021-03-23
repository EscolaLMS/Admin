module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules'],
  transform: {
    '\\.tsx?$': 'ts-jest',
    '\\.jsx?$': 'babel-jest', // if you have jsx tests too
    // 'node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$',
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
    'node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
    '[/\\\\]node_modules[/\\\\](?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
  ],
};
