/*

07 - Contem "a" ?

Escreva um algoritmo que recebe uma palavra e checa se ela possui a letra "a" considerando as seguintes premissas para cada tipo de retorno.

Se apenas começa com letra "a", retorne:
------------------------------------------------------------
"A palavra x possui a letra 'a' apenas como primeira letra."
------------------------------------------------------------

Se apenas termina com a letra "a", retorne:
----------------------------------------------------------
"A palavra x possui a letra "a" apenas como última letra."
----------------------------------------------------------

Se apenas termina e começa com a letra "a", retorne:
----------------------------------------------------------------------
"A palavra x possui a letra 'a' apenas no começo e no fim da palavra."
----------------------------------------------------------------------

Se apenas possui o "a" sem a mesma ser a primeira ou a última letra da palavra, , retorne:
----------------------------------------------------------------------------
"A palavra x possui a letra 'a', porém não é a primeira nem a última letra."
----------------------------------------------------------------------------

Senão, retorne:
-----------------------------
"A palavra x não contém "a"."
-----------------------------

*/

function includeA(word) {
  // Desenvolva seu código nessa função
  let last = word.length - 1;
  let isA = (letter) => /[aA]/.test(letter);
  // Se apenas começa com letra "a", retorne:  A palavra x possui a letra 'a' apenas como primeira letra.
  if(isA(word[0]) && !isA(word[last])) return `A palavra ${word} possui a letra 'a' apenas como primeira letra.`;

  // Se apenas termina com a letra "a", retorne:  A palavra x possui a letra "a" apenas como última letra.
  if(!isA(word[0]) && isA(word[last])) return `A palavra ${word} possui a letra 'a' apenas como última letra.`;

  // Se apenas termina e começa com a letra "a", retorne:  A palavra x possui a letra 'a' apenas no começo e no fim da palavra.
  if(isA(word[0]) && isA(word[last])) return `A palavra ${word} possui a letra 'a' apenas no começo e no fim da palavra.`;

  // Se apenas possui o "a" sem a mesma ser a primeira ou a última letra da palavra, , retorne:  A palavra x possui a letra 'a', porém não é a primeira nem a última letra.
  if(word.toLowerCase().includes('a')) return `A palavra ${word} possui a letra 'a', porém não é a primeira nem a última letra.`;

  // Else:  A palavra x não contém "a".
  return `A palavra ${word} não contém a letra 'a'.`

}

module.exports = includeA;
