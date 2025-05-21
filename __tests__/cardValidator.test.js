import {describe, expect, test} from '@jest/globals'
import {validateCardNumber} from '../src/utils/cardValidator.js'

describe('Card Number Validation', () => {
	test('should validate Visa cards', () => {
		expect(validateCardNumber('4111111111111111')).toBe(true);
		expect(validateCardNumber('4111111111111112')).toBe(false);
	});

	test('should validate Mastercard', () => {
		expect(validateCardNumber('5555555555554444')).toBe(true);
		expect(validateCardNumber('5555555555554445')).toBe(false);
	});

	test('should validate Mir cards', () => {
		expect(validateCardNumber('2200770212727079')).toBe(true);
		expect(validateCardNumber('2200770212727078')).toBe(false);
	});

	test('should validate American Express', () => {
		expect(validateCardNumber('378282246310005')).toBe(true);
		expect(validateCardNumber('378282246310006')).toBe(false);
	});

	test('should validate JCB cards', () => {
		expect(validateCardNumber('3530111333300000')).toBe(true);
		expect(validateCardNumber('3530111333300001')).toBe(false);
	});

	test('should validate Diners Club', () => {
		expect(validateCardNumber('36490102462661')).toBe(true);
		expect(validateCardNumber('36490102462662')).toBe(false);
	});

	test('should validate Discover cards', () => {
		expect(validateCardNumber('6011111111111117')).toBe(true);
		expect(validateCardNumber('6011111111111118')).toBe(false);
	});

	test('should return false for invalid inputs', () => {
		expect(validateCardNumber('')).toBe(false);
		expect(validateCardNumber('abcd')).toBe(false);
		expect(validateCardNumber('1234')).toBe(false);
	});
});