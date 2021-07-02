module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.tsx?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
