/*

06 - Nome do cachorro

Joana adotou um cachorrinho e decidiu usar o nome de suas comidas favoritas para dar nome 
a ele, ela vai usar as 3 primeiras letras do seu salgadinho favorito e juntar com as 3 ultimas 
letras do seu doce favorito.

Escreva um algoritmo que recebe o nome do salgadinho e o nome do doce e retorne o nome do cachorrinho de Joana.

Por exemplo:
--------------------
Entradas:
"Chocolate", "Pudim"

Saída:
"Chodim"
--------------------

*/

function dogName(snack, sweet) {
  // Desenvolva seu código nessa função
  let first = snack[0] + snack[1] + snack[2];
  let second = sweet[sweet.length - 3] + sweet[sweet.length - 2] + sweet[sweet.length - 1];
  return `O cachorrinho de Joana vai se chamar: ${first + second}`
}

module.exports = dogName;
