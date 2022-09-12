/*

03 - Array de notas musicais

Uma música normalmente possui uma sequência de notas.

Data a escala natural de Dó, cada uma das 7 notas possui um grau representado por um algarismo romano conforme abaixo:

| Dó | Ré | Mi  | Fá | Sol | Lá | Si  |
| I  | II | III | IV |  V  | VI | VII |

Escreva um algoritmo que recebe um array de notas e retorne um outro array com os respectivos graus da escala de Dó.

Por exemplo:
----------------------------
Entrada:
['Ré', 'Sol', 'Dó']

Saída:
['II', 'V', 'I']
----------------------------

 */

function musicalNotes(notes) {
  // Desenvolva seu código nessa função
  const notesToRoman = {Dó:'I',
                        Ré:'II',
                        Mi:'III',
                        Fa:'IV',
                        Sol:'V',
                        Lá:'VI',
                        Si:'VII'};

  let result = notes.map((note) => notesToRoman[note]);
  return result
}

module.exports = musicalNotes;
