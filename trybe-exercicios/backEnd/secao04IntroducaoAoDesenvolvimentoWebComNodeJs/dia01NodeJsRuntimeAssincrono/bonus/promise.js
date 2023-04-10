// Crie uma função que recebe três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise
// com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e
// multiplique o resultado pelo terceiro((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor
// muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const rl = require('readline-sync');

const a = rl.questionInt('a: ');
const b = rl.questionInt('b: ');
const c = rl.questionInt('c: ');

async function calc() {
  const promise = new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error('Informe apenas números.'));
    }
    const result = (a + b) * c;
    if (result < 50) {
      reject(new Error('Valor muito baixo.'));
    };
    resolve(result);
  });
  return promise;
};

calc()
  .then(response => console.log(response))
  .catch(error => console.log(error.message));
