/*

09 - Incluído nos arrays

Escreva um algoritmo que irá receber dois array a e b, retorne um novo array com os elementos que se repetem em a e b, se não houver elemento repetidos, retorne um array vazio.

Por exemplo:
--------------------------------------------------------------------------------
Entradas:
a = [1, 2, 3 ], b = [4, 2, 4 ]

Saída:
[2]
--------------------------------------------------------------------------------

Obs: Não utilize o includes, você deve encontrar os valores utilizando 2 for's.

*/

function includesArrays(a, b){
  // Desenvolva seu código nessa função
  let result = [];
  if(a.length === 0 || b.length === 0) return result;
  for (let i = 0, sizeA = a.length; i < sizeA; i++) {
    let numA = a[i];
    for (let j = 0, sizeB = b.length; j < sizeB; j++) {
      let numB = b[j];
      if(numA === numB) result.push(numA)
    }
  }
  console.log(result)
  return result
}

module.exports = includesArrays;
