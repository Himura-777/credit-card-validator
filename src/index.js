import './styles/main.css'
import {validateCardNumber} from './utils/cardValidator'
import {detectCardSystem} from './utils/cardSystemDetector'
import {setupEventListeners} from './utils/domHandler'

document.addEventListener('DOMContentLoaded', () => {
	setupEventListeners(validateCardNumber, detectCardSystem);
});