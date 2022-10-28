// Existe um objeto yearSeasons que representa as estações do ano. Cada estação é uma
// chave deste objeto, e o valor de cada chave é um array de strings, representando os
// meses daquela estação. A partir deste objeto, desestruture as estações do ano e
// espalhe-as em um array de meses do ano.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const months = ( { spring, summer, autumn, winter } ) => [...spring, ...summer, ...autumn, ...winter];
console.log(months(yearSeasons));