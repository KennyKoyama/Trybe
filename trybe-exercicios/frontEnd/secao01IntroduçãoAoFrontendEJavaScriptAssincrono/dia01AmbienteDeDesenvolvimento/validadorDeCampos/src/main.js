import validator from 'validator';
import './styles.css';

const inputText = document.querySelector('#text-input');
const dropdown = document.querySelector('#dropdown');
const validateBtn = document.querySelector('#validate-btn');
const result = document.querySelector('#result');

validateBtn.addEventListener('click', () => {
  const text = inputText.value;
  const option = dropdown.selectedOptions[0].value;
  const optionText = dropdown.selectedOptions[0].text;
  const isValid = String(validator[option](text)).toUpperCase();
  result.innerHTML = `${text} ${optionText}?  ${isValid}!`;
});
