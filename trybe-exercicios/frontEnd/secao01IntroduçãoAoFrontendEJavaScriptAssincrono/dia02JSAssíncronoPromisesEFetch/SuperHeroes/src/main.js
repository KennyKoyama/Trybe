import './styles.css';
import Swal from 'sweetalert2';

const HEROES_API = 'https://superheroapi.com/api.php/10229759198387812/';
const randomID = () => Math.ceil(Math.random() * 731);
const container = document.querySelector('#container');
const heroImage = document.querySelector('#hero-image');
const heroName = document.querySelector('#hero-name');
const shuffleBtn = document.querySelector('button');

shuffleBtn.addEventListener('click', () => {
  fetch(`${HEROES_API}${randomID()}`)
    .then(response => response.json())
    .then(data => {
      heroImage.src = data.image.url;
      heroName.innerHTML = data.name;
    })
    .catch(error => Swal.fire(error))
})
