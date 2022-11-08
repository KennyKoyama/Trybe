// For Each
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
emailListInData.forEach((email) => showEmailList(email));


// Find
const numbers = [19, 21, 30, 3, 45, 22, 15];
const findDivisibleBy3And5 = () =>  numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(findDivisibleBy3And5());

const names = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => names.find((name) => name.length === 5);
console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
};
console.log(findMusic('31031685'));


// Some
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => arr.some((elem) => elem === name);
console.log(hasName(names2, 'Ana'));

// Every
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
const verifyAges = (arr, minimumAge) => arr.every((person) => person.age >= minimumAge);
console.log(verifyAges(people, 18));


// Sort ordem crescente
const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];
people2.sort((personA, personB) => personA.age - personB.age);
console.log(people2);

// Sort ordem decrescente
people2.sort((personA, personB) => personB.age - personA.age);
console.log(people2);