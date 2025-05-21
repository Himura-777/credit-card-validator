import {describe, expect, test} from '@jest/globals'
import {detectCardSystem} from '../src/utils/cardSystemDetector.js'

describe('Card System Detection', () => {
	test('should detect Visa cards', () => {
		expect(detectCardSystem('4111111111111111')).toBe('visa');
		expect(detectCardSystem('4222222222222')).toBe('visa');
	});

	test('should detect Mastercard', () => {
		expect(detectCardSystem('5555555555554444')).toBe('mastercard');
		expect(detectCardSystem('2223003122003222')).toBe('mastercard');
	});

	test('should detect Mir cards', () => {
		expect(detectCardSystem('2200770212727079')).toBe('mir');
	});

	test('should detect American Express', () => {
		expect(detectCardSystem('378282246310005')).toBe('amex');
	});

	test('should detect JCB cards', () => {
		expect(detectCardSystem('3530111333300000')).toBe('jcb');
	});

	test('should detect Diners Club', () => {
		expect(detectCardSystem('36490102462661')).toBe('diners');
	});

	test('should detect Discover cards', () => {
		expect(detectCardSystem('6011111111111117')).toBe('discover');
	});

	test('should return null for unknown cards', () => {
		expect(detectCardSystem('1234567812345678')).toBeNull();
	});
});