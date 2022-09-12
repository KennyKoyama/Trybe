/*

04 - Quem é a pessoa mais velha?

Dado um array de pessoas, escreva um algoritmo que identifique qual tem a maior idade e retorne o nome da pessoa e sua idade.

O array terá o seguinte formato:
people = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 }
];

O retorno deve ser no seguinte formato:
---------------------------------
"x tem a maior idade com y anos."
---------------------------------

*/

function getOldPerson(arrPeople) {
  // Desenvolva seu código nessa função
  let oldest = arrPeople.sort((a,b) => b.age - a.age)[0];

  return `${oldest.name} tem a maior idade com ${oldest.age} anos.`
}

module.exports = getOldPerson;
