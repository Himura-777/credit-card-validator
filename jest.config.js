module.exports = {
	transform: {
		'^.+\\.js$': 'babel-jest'
	},
	moduleFileExtensions: ['js', 'json'],
	moduleDirectories: ['node_modules', 'src'],
	testEnvironment: 'node'
};