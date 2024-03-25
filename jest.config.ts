import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|webp|svg|wav)$': '<rootDir>/__mocks__/fileMock.js',
	},
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;