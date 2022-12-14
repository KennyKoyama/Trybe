/*

08 - Descubra quantas letras tem

Escreva um algoritmo que recebe 2 parâmetros: uma string (frase ou palavra) e uma letra.

A função deve retornar quantas letras passadas como 2º parâmetro existem na string.

Obs: Trate as vogais com acento como não tendo, por exemplo:
a = á, ã, à.

*/

function countLetters(string, letter) {
  // Desenvolva seu código nessa função
  let vowels = {a:/[aàáäâã]/i,
                e:/[eèéëê]/i,
                i:/[iìíïî]/i,
                o:/[oòóöô]/i,
                u:/[uùúüû]/i};

  let count = 0;
  string.split('').forEach(elem => {
    if(vowels[letter].test(elem)) count++;
  });
  return count
}

module.exports = countLetters;
