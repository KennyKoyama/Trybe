import Swal from 'sweetalert2';
import getAddressFromCep from './getAddressFromCep';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

buttonEl.addEventListener('click', handleClick);

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();
    const addressData = await getAddressFromCep(cep);
    if(data.hasOwnProperty('erro')) throw new Error('CEP inválido');

    preEl.innerHTML = JSON.stringify(addressData);
    return data;
  } catch (error) {
    return Swal.fire('Ops...', error.message, 'error');
  }
}
