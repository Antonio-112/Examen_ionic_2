module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  // Use default transforms from jest-preset-angular
  // Allow transforming ESM packages shipped in node_modules (e.g. Angular FESM2022 .mjs)
  transformIgnorePatterns: [
    // Allow transforming ESM from Angular/Ionic and Stencil packages
    'node_modules/(?!.*\\.mjs$|@angular|rxjs|tslib|@ionic|ionicons|@stencil)'
  ],
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  moduleNameMapper: {
    '^ionicons/(.*)$': '<rootDir>/node_modules/ionicons/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};
