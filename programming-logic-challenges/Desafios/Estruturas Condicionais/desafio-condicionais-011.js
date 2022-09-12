 /*
 
 11 - Triplica vogais

 Escreva um algoritmo que recebe uma string (frase ou palavra) e retorne uma outra string com as vogais "triplicadas".
 
 Por exemplo:
 ------------
 Entrada:
 "Camelo"

 Saída:
 "Caaameeelooo"
 --------------
 
 */

function triVowels(word){
  // Desenvolva seu código nessa função
  let result = '';
  let regX = /[aeiouAEIOU]/;
  word.split('')
      .forEach((digit) => {
        if(regX.test(digit)) result += digit.repeat(3);
        if(!regX.test(digit)) result += digit;
      });
  return result
}

module.exports = triVowels;
