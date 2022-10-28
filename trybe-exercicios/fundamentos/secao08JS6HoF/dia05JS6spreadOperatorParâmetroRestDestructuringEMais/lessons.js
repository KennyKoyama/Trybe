// Lesson 1
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'suco de laranja', 'hortelã'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));


// Lesson 2
// Imprima no console uma frase utilizando os dados do objeto criado anteriormente.
// Para isso, utilize a desestruturação de objetos em conjunto com template literals.
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name , age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)


// Lesson 3
// Produza o mesmo resultado do código, porém utilizando o array destructuring
// para recolher a função e a saudação.
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [saudacao, funcao] = saudacoes;
console.log(saudacao)
console.log(funcao)


// A seguir, temos alguns valores que estão descritos em variáveis incoerentes.
// Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis
// correspondentes ao seu verdadeiro tipo
[animal, bebida, comida] = [comida, animal, bebida];
console.log(comida, animal, bebida); // arroz gato água


// O array abaixo possui alguns números que não condizem com o conteúdo que ele
// deveria possuir. Através de array destructuring, faça com que existam apenas
// números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,,...numerosPares] = numerosPares;
console.log(numerosPares); // [6, 8, 10, 12];


// Do jeito que está, quando person é passado para a função getNationality o retorno
// é João is undefined. Ajuste a função getNationality para que a chamada getNationality
// (person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
