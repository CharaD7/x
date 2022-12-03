module.exports = require('next/jest')()({
  moduleDirectories: [__dirname, 'node_modules'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom'
});
