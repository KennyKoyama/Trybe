// Crie um código que exiba o valor dos n primeiros elementos da sequência de Fibonacci.
// A sequência de Fibonacci começa com 0 e 1 e os números seguintes são sempre a soma
// dos dois números anteriores.
// Armazene o código no arquivo fibonacci.js.
// Utilize o readline-sync para realizar o input de dados.
// O código deve ser acionado através do comando npm run fibonacci.
// Não imprima o valor 0, uma vez que ele não está incluso na sequência.
// Quando n = 10, exatamente 10 elementos devem ser exibidos.
// Adicione validações para garantir que o valor informado é um inteiro maior que 0.

const rl = require('readline-sync');

const n = rl.questionInt('Amount: ');

function fibonacci() {
  if (n <= 0) return console.log(`${n} is not a valid number.`);
  const result = [1];
  while (result.length < 10) {
    if (result.length <= 1) result.push(2);
    if (result.length > 1) result.push(result[result.length - 1] + result[result.length - 2]);
  }
  console.log(result)
}

fibonacci()
