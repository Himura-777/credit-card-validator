import './styles/main.css'
import {validateCardNumber} from './utils/cardValidator.js'
import {detectCardSystem} from './utils/cardSystemDetector.js'
import {setupEventListeners} from './utils/domHandler.js'

document.addEventListener('DOMContentLoaded', () => {
	setupEventListeners(validateCardNumber, detectCardSystem);
});