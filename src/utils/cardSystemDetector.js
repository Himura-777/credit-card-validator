export function detectCardSystem(cardNumber) {
	const cleaned = cardNumber.replace(/\D/g, '');

	// Visa (13, 16 or 19 digits, starts with 4)
	if (/^4\d{12}(\d{3})?$/.test(cleaned)) return 'visa';

	// Mastercard (16 digits: 51-55 or 2221-2720)
	if (/^5[1-5]\d{14}$/.test(cleaned) || /^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)\d{12}$/.test(cleaned)) return 'mastercard';

	// Mir (16 digits, starts with 2200-2204)
	if (/^220[0-4]\d{12}$/.test(cleaned)) return 'mir';

	// Amex (15 digits, starts with 34 or 37)
	if (/^3[47]\d{13}$/.test(cleaned)) return 'amex';

	// JCB (16 digits, starts with 3528-3589)
	if (/^35(2[89]|[3-8]\d)\d{12}$/.test(cleaned)) return 'jcb';

	// Diners Club (14 digits, starts with 36)
	if (/^36\d{12}$/.test(cleaned)) return 'diners';

	// Discover (16 digits, starts with 6011 or 65)
	if (/^6011\d{12}$/.test(cleaned) || /^65\d{14}$/.test(cleaned)) return 'discover';

	return null;
}