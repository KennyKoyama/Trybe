/*

13 - Fibonacci

A sequência de números 0 1 1 2 3 5 8 13 21...n é conhecida como sequência de Fibonacci.

Nessa sequência, cada número, depois dos 2 primeiros é igual à soma dos 2 anteriores.

Escreva um algoritmo que recebe um valor n que corresponde ao enésimo número da sequência e retorne o enésimo número da sequência de Fibonnaci.

Por exemplo:
------------
Entrada:
5

Saída:
3
------------

*/

function fibonnaci(n){
  // Desenvolva seu código nessa função
  if(n === 0 || n === 1 ) return 0;
  if(n === 2) return 1;
  // Start on F[2]
  let current = 1;
  let sum;
  let lastNum = 0;
  let index = 0;
  while (index < (n - 2)){
      sum = current + lastNum;
      lastNum = current;
      current = sum;
      index++;
  }
  return current
}

module.exports = fibonnaci;
