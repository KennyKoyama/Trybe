const hydrate = (drinkAmount) => {
  let amount = drinkAmount.match(/\d/g)
                          .reduce((sum, curr) => sum + Number(curr), 0);
  let result = amount > 1 ? `${amount} copos de água` : `${amount} copo de água`;
  return result;
};

module.exports = hydrate;