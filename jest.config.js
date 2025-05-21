export default {
	testEnvironment: 'node',
	transform: {
		'^.+\\.js$': 'babel-jest'
	},
	moduleNameMapper: {
		'^(\\.{1,2}/.*)\\.js$': '$1'
	},
	testPathIgnorePatterns: [
		'/node_modules/',
		'/__tests__/e2e/'
	],
	transformIgnorePatterns: [
		'/node_modules/(?!your-module-to-transform)'
	]
};