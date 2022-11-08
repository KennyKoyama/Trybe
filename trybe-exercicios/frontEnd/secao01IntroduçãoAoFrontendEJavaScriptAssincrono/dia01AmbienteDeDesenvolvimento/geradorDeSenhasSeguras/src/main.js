import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './styles.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', () => {
  console.log('Copy')
  console.log(displayPasswordEl.innerHTML)
  const currentPass = displayPasswordEl.innerHTML;
  copy(currentPass)
});