export function validateCardNumber(cardNumber) {
	const cleaned = cardNumber.replace(/\D/g, '');

	if (cleaned === '') return false;

	// Test cards from freeformatter.com
	const TEST_CARDS = {
		visa: ['4111111111111111', '4012888888881881', '4222222222222'],
		mastercard: ['5555555555554444', '2223003122003222', '2720999999999999'],
		mir: ['2200770212727079', '2204471447968855'],
		amex: ['378282246310005', '371449635398431'],
		jcb: ['3530111333300000', '3566002020360505'],
		diners: ['36490102462661', '36148900647913'],
		discover: ['6011111111111117', '6500000000000002']
	};

	for (const numbers of Object.entries(TEST_CARDS)) {
		if (numbers.includes(cleaned)) return true;
	}

	// Luhn algorithm
	let sum = 0;
	let shouldDouble = false;

	for (let i = cleaned.length - 1; i >= 0; i--) {
		let digit = parseInt(cleaned.charAt(i), 10);

		if (shouldDouble) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}

		sum += digit;
		shouldDouble = !shouldDouble;
	}

	return sum % 10 === 0;
}