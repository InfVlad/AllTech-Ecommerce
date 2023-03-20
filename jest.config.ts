// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
export default {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  preset: 'ts-jest/presets/js-with-ts',
  // moduleDirectories: ['node_modules', 'src/'],
  // preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)test.{ts,tsx}', '!**/?(*.)int.test.{ts,tsx}'],
  // setupFiles: ['./jest.setup.ts'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  // ignore E2E tests
  testPathIgnorePatterns: ['<rootDir>/tests', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
