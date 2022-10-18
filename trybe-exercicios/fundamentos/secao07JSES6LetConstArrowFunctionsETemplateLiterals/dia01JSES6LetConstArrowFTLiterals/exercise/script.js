// Parte I
// 🚀 Exercício 1
// Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em 
// que foram declaradas, e altere a função utilizando arrow function e template literals.
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);
testingScope(false);

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as concatenações para template literals.
const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const testingScopeArrow = escopo => escopo ? console.log(`${ifScope} ótimo, fui utilizada no escopo !`)
                                  : console.log('Não devo ser utilizada fora do meu escopo (else)');
testingScopeArrow(true);
testingScopeArrow(false);


// Crie uma função que retorne um array em ordem crescente.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (numberList) => `Os números ${numberList.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`;
// Seu código aqui.
// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada 
// console.log(<seu código>oddsAndEvens<seu código>);
// retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
// Spoiler: É possível realizar uma função que ordene qualquer array de números.

console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉
