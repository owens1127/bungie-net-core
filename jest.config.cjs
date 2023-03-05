/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/**.test.ts"],
  globalSetup: "<rootDir>/test-src/env.ts"
};