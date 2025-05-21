export function setupEventListeners(validateCardNumber, detectCardSystem) {
	const cardNumberInput = document.getElementById('card-number');
	const validateBtn = document.getElementById('validate-btn');
	const resultDiv = document.getElementById('result');
	const cardLogos = document.querySelectorAll('.card-logo');

	cardNumberInput.addEventListener('input', (e) => {
		const value = e.target.value.replace(/\D/g, '');
		const cardSystem = detectCardSystem(value);

		cardLogos.forEach(logo => {
			logo.classList.remove('active');
			logo.style.opacity = '0.3';
			if (logo.id === `${cardSystem}-logo`) {
				logo.classList.add('active');
				logo.style.opacity = '1';
			}
		});

		let formattedValue = '';
		for (let i = 0; i < value.length; i++) {
			if (i > 0 && i % 4 === 0) formattedValue += ' ';
			formattedValue += value[i];
		}
		e.target.value = formattedValue;
	});

	validateBtn.addEventListener('click', () => {
		const cardNumber = cardNumberInput.value.replace(/\D/g, '');
		const isValid = validateCardNumber(cardNumber);
		const cardSystem = detectCardSystem(cardNumber);

		if (isValid && cardSystem) {
			resultDiv.textContent = `Valid ${cardSystem.toUpperCase()} card`;
			resultDiv.className = 'valid';
		} else {
			resultDiv.textContent = 'Invalid card number';
			resultDiv.className = 'invalid';
		}
	});
}