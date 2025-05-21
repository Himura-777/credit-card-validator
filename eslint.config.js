import js from '@eslint/js'
import globals from 'globals'
import jestPlugin from 'eslint-plugin-jest'

export default [
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			jest: jestPlugin,
		},
		rules: {
			'no-console': 'warn',
			'jest/no-disabled-tests': 'warn',
			'jest/no-focused-tests': 'error',
			'jest/no-identical-title': 'error',
		},
	},
	{
		files: ['**/*.test.js'],
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
		rules: {
			'no-undef': 'off',
		},
	},
	{
		files: ['*.config.js'],
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];