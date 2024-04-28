import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  roots: ['<rootDir>/tests'],
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true
};
export default config;