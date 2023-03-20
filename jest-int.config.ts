/** @type {import('jest').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest/presets/js-with-ts',
  setupFiles: ['./jest-int.setup.js'],
  testRegex: ['.int.test.ts$'],
  transform: {
    '^.+\\.mjs$': 'ts-jest',
  },
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
};
