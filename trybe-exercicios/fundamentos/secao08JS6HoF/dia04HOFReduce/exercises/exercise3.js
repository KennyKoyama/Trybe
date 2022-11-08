const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;
// Dado o array de nomes, utilize o reduce para retornar a quantidade de
// vezes em que aparece a letra a, maiúscula ou minúscula.
function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, curr) => acc.concat(curr.match(/\a/ig)), []).length;
}

// One line receiving arguments
const containsAArrow = (arr) => arr.reduce((acc, curr) => acc.concat(curr.match(/\a/ig)), []).length;
