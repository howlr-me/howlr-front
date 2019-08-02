module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'\\.(scss|sass|css)$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/fileMock.ts'
	},
	setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
	globals: {
		FILE_MOCK: 'mockedFile'
	}
};
