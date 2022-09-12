/*

04 - Escreva um nome N vezes

Escreva um algoritmo usando a estrutura "FOR" que irá receber um nome e a quantidade de vezes que o mesmo deve ser repetido e retorná-lo.

Por exemplo:
-------------------------------
Entradas:
"João", 5

Saída:
"João, João, João, João, João."
-------------------------------

*/

function repeatName(name, quantity) {
  // Desenvolva seu código nessa função
  let result = [];
  for (let n = 0; n < quantity; n++) {
    result.push(name);
  }
  
  return result.join(', ').concat('.')
}

module.exports = repeatName;
