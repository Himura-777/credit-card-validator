const { detectCardSystem } = require('../src/utils/cardSystemDetector');

describe('detectCardSystem', () => {
	test('should detect Visa cards', () => {
		expect(detectCardSystem('4111 1111 1111 1111')).toBe('visa');
		expect(detectCardSystem('4222 2222 2222 2')).toBe('visa');
	});

	test('should detect Mastercard cards', () => {
		expect(detectCardSystem('5555 5555 5555 4444')).toBe('mastercard');
	});

	test('should detect Mir cards', () => {
		expect(detectCardSystem('2200 0000 0000 0004')).toBe('mir');
		expect(detectCardSystem('2204 1234 5678 9012')).toBe('mir');
	});

	test('should detect Amex cards', () => {
		expect(detectCardSystem('3782 822463 10005')).toBe('amex');
		expect(detectCardSystem('3714 496353 98431')).toBe('amex');
	});

	test('should return null for unknown cards', () => {
		expect(detectCardSystem('6011 0000 0000 0004')).toBeNull();
		expect(detectCardSystem('1234 5678 9012 3456')).toBeNull();
	});
});