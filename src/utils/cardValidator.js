function validateCardNumber(cardNumber) {
	// Remove all non-digit characters
	const cleaned = cardNumber.replace(/\D/g, '');

	// Check if the card number is empty or contains non-digits
	if (!cleaned || !/^\d+$/.test(cleaned)) {
		return false;
	}

	// Luhn algorithm implementation
	let sum = 0;
	let shouldDouble = false;

	for (let i = cleaned.length - 1; i >= 0; i--) {
		let digit = parseInt(cleaned.charAt(i), 10);

		if (shouldDouble) {
			digit *= 2;
			if (digit > 9) {
				digit -= 9;
			}
		}

		sum += digit;
		shouldDouble = !shouldDouble;
	}

	return sum % 10 === 0;
}

module.exports = { validateCardNumber };