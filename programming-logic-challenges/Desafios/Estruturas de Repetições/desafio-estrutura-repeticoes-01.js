/*

01 - Mensagem codificada 

Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.

Exemplo:
---------
Entrada:
"Trybe"

Saída:
"036912".
---------

*/

function encode(string){
  // Desenvolva seu código nessa função
  let result = '';
  
  for (let index = 0, size = string.length; index < size; index++) {
    result += (index * 3);
    
  }
  

  return result
}

module.exports = encode;
