const hydrate = (drinkAmount) => {
  let amount = drinkAmount.match(/\d/g)
                          .reduce((sum, curr) => sum + Number(curr), 0);
  let result = amount > 1 ? `${amount} copos de água` : `${amount} copo de água`;
  return result;
};



console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 shots de tequila, 2 cervejas e 1 corote'));
console.log(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho'));
console.log(hydrate('4 caipirinhas e 2 cervejas'));

module.exports = hydrate;