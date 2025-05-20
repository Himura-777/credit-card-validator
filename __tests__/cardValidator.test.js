const { validateCardNumber } = require('../src/utils/cardValidator');

describe('validateCardNumber', () => {
	test('should validate Visa card numbers', () => {
		expect(validateCardNumber('4111 1111 1111 1111')).toBe(true);
		expect(validateCardNumber('4111 1111 1111 1112')).toBe(false);
	});

	test('should validate Mastercard numbers', () => {
		expect(validateCardNumber('5555 5555 5555 4444')).toBe(true);
		expect(validateCardNumber('2221 0000 0000 0009')).toBe(true);
		expect(validateCardNumber('5555 5555 5555 4445')).toBe(false);
	});

	test('should validate Mir card numbers', () => {
		expect(validateCardNumber('2200 0000 0000 0004')).toBe(true);
		expect(validateCardNumber('2200 0000 0000 0005')).toBe(false);
	});

	test('should validate Amex card numbers', () => {
		expect(validateCardNumber('3782 822463 10005')).toBe(true);
		expect(validateCardNumber('3714 496353 98431')).toBe(true);
		expect(validateCardNumber('3782 822463 10006')).toBe(false);
	});

	test('should return false for invalid inputs', () => {
		expect(validateCardNumber('')).toBe(false);
		expect(validateCardNumber('abcd')).toBe(false);
		expect(validateCardNumber('1234')).toBe(false);
	});
});