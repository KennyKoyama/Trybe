/*

01 - Verifica se pessoa tem idade para dar entrada na CNH

Escreva um algoritmo que recebe o nome e ano de nascimento de uma pessoa e verifique se ela pode dar entrada na CNH.

Se a pessoa tiver menos de 18 anos retorne:
------------------------------------------------------
"x tem y anos de idade e não pode iniciar o processo."
------------------------------------------------------

Caso contrário:
--------------------------------------------------
"x tem y anos de idade e pode iniciar o processo."
--------------------------------------------------

*/

function cnhProcess(name, birthYear){
  // Desenvolva seu código nessa função
  let today = new Date();
  let age = today.getFullYear() - birthYear;
  let result = age >= 18 ? `${name} tem ${age} anos de idade e pode iniciar o processo.` : `${name} tem ${age} anos de idade e não pode iniciar o processo.`;
  return result
}

module.exports = cnhProcess;
