const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, curr) => acc.concat(curr))
}

// One line and receiving arguments
const flattenArrow = (arr) => arr.reduce((acc, curr) => acc.concat(curr));
