function detectCardSystem(cardNumber) {
	const cleaned = cardNumber.replace(/\D/g, '');

	if (/^4\d{12}(\d{3})?$/.test(cleaned)) return 'visa';
	if (/^5[1-5]\d{14}$/.test(cleaned)) return 'mastercard';
	if (/^220[0-4]\d{12}$/.test(cleaned)) return 'mir';
	if (/^3[47]\d{13}$/.test(cleaned)) return 'amex';

	return null;
}

module.exports = { detectCardSystem };