import './styles.css';

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://aws.random.cat/meow';
const image = document.querySelector('img');
const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const surpriseBtn = document.querySelector('#surprise-btn');

dogBtn.addEventListener('click', () => {
  fetch(DOG_API)
    .then(response => response.json())
    .then(data => image.src = data.message)
    .catch(error => alert(error));
});

catBtn.addEventListener('click', () => {
  fetch(CAT_API)
    .then(response => response.json())
    .then(data => image.src = data.file)
    .catch(error => alert(error));
});

surpriseBtn.addEventListener('click', () => {
  const dog = fetch(DOG_API)
    .then(response => response.json())
    .then(data => data.message);

  const cat = fetch(CAT_API)
    .then(response => response.json())
    .then(data => data.file);

  Promise.race([dog, cat])
    .then(data => {
      console.log(data)
      image.src = data;
    });
});
