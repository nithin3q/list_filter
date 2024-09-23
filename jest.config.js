export default {
    testEnvironment: 'jest-environment-jsdom',  // Set the correct environment for DOM testing
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy'
    }
  };
  