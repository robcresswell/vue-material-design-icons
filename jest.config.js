module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: '<rootDir>/reports/jest' }],
  ],
  testEnvironment: 'jsdom',
};
