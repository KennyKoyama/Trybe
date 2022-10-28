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