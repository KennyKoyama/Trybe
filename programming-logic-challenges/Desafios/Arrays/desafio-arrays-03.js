/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida|da a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  // Desenvolva seu código nessa função
  let result = names.some((name)=> guest === name) ? "O nome está na lista." : "O nome não está na lista.";
  return result// Retorne o resultado aqui
}

module.exports = findGuest;
