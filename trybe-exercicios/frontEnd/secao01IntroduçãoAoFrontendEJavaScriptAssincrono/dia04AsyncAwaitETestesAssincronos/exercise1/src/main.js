import Swal from 'sweetalert2';
import getAddressFromCep from './getAddressFromCep';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

inputEl.addEventListener('keydown', (e) => {
  const notDeleteKey = () => e.key !== 'Backspace';
  const size = inputEl.value.length;
  if(!/[\d-]|Backspace/.test(e.key)) e.preventDefault();
  if(size !== 5 && e.key === '-') e.preventDefault();
  if(size === 5 && notDeleteKey() && !/[-]/.test(e.key)) inputEl.value += '-';
});

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const addressData = await getAddressFromCep(cep);
    if(addressData.hasOwnProperty('erro')) throw new Error('CEP inválido');
    const result = Object.entries(addressData)
      .map(([ key, value ]) => `<p>${key.toUpperCase()}: <span id='value'>${value}.</span></p>`)
      .join('');
    // preEl.innerHTML = JSON.stringify(addressData);
    preEl.innerHTML = result;
    return addressData;
  } catch (error) {
    return Swal.fire('Ops...', error.message, 'error');
  }
}
