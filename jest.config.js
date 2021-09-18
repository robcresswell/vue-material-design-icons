module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
};
