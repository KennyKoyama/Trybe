/* Não entendi o que é para fazer no 15 */

// 15 - Fatorial e média

/*

Faça uma função que calcule o fatorial de um número recebido por parâmetro e em seguida, utilize-a para fazer a função que calcula a média dos fatoriais de A a B,
sendo A e B números inteiros maiores ou iguais a 0.
A média deve ter até 2 casas decimais de precisão.
*/

function factorial15(number) {
  // Desenvolva aqui a lógica para calcular o fatorial
  if(number === 0) return 1;
  let current = 1;
  let last = 1;
  while(current <= number){
      last *= current;
      current++;
  }
  return last
}

function meanFactorialFromAToB(a, b) {
  // Desenvolva aqui a lógica para calcular a média dos fatoriais de 0 a 5
  let result;
  let start = a;
  let finish = b;
  let sum = 0;
  let div = 0;
  while(start <= finish){
    div++;
    sum += factorial15(start);
    start++;
  }
  result = Number.isInteger(sum / div) ? (sum / div) : Number((sum / div).toFixed(2));
  return result
}

module.exports = {
  factorial15,
  meanFactorialFromAToB,
};
