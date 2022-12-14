/*

09 - Brincando de espionagem

Joana e Jonas estão brincando de espionagem e querem trocar mensagens codificadas.

Escreva um algoritmo que recebe uma string troque as vogais no seguinte padrão e a retorne:
a - 5
e - b
i - 9
o - p
u - 1

*/

function encodeMessage(string) {
  // Desenvolva seu código nessa função
  let encodedVowels = {a : '5',
                       e : 'b',
                       i : '9',
                       o : 'p',
                       u : '1'};

  let result = '';
  let isVowel = ((param) => /[aeiou]/.test(param))
  string.split('').forEach(letter => {
    if(isVowel(letter)) result += encodedVowels[letter];
    if(!isVowel(letter)) result += letter;
  });
  return result
}

module.exports = encodeMessage;
