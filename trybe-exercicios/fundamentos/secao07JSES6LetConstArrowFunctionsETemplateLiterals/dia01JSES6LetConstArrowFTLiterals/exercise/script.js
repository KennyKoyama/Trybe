// Parte I
// 🚀 Exercício 1
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
// Crie uma função que retorne um array em ordem crescente.


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
// Seu código aqui.
// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada 
// console.log(<seu código>oddsAndEvens<seu código>);
// retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
// Spoiler: É possível realizar uma função que ordene qualquer array de números.
}
console.log(oddsAndEvens); // será necessário alterar essa linha 😉
