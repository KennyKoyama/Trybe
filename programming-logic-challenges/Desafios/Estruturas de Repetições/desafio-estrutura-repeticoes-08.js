/*

08 - Ordem decrescente

Escreva um algoritmo que retorne uma string com os números inteiros do intervalo de 100 a 200 em ordem decrescente.

Exemplo de saída:
-------------
x, y, z ...n.
-------------

*/

function sortDec(){
  // Desenvolva seu código nessa função
  let result = [];
  for (let num = 200; num >= 100; num--) {
    result.push(num)
  }
  return result.join(', ').concat('.')
}

module.exports = sortDec;
