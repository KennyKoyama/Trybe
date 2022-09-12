/*

17 - Financiamento de veículo

Escreva um algoritmo para gerenciar as contas de um financiamento de veículo. 

A pessoa que quer fazer o financiamento precisa informar:

* o valor total do carro;
* o valor da entrada a ser dada;
* quantidade de parcelas que ela deseja pagar.

A loja em questão usa uma taxa de juros fixa de 5% sobre o valor do financiamento.

Desenvolva a solução e retorne conforme o exemplo (os valores monetários precisam ter 2 casas decimais após a virgula):

--------------------------------
Valor Financiado: R$35000,00;
Valor do Juros: R$1750,00;
Quantidade de Parcelas: 36;
Valor da Parcela: R$1020,83;
Valor Total do Carro: R$46750,00.
--------------------------------

*/

function carFinancing(carPrice, entranceValue, quota) {
  // Desenvolva seu código nessa função
  let financiado = carPrice - entranceValue;
  let juros = (financiado * 0.05).toFixed(2);
  let parcela = ((financiado + Number(juros)) / quota).toFixed(2);
  let total = (financiado + Number(juros) + entranceValue).toFixed(2);
  let convert = (valor) => String(valor).split('').map((digit) => digit === '.' ? ',' : digit).join('');
  let result = `Valor Financiado: R$${convert((financiado).toFixed(2))};\nValor do Juros: R$${convert(juros)};\nQuantidade de Parcelas: ${quota};\nValor da Parcela: R$${convert(parcela)};\nValor Total do Carro: R$${convert(total)}.`;

  return result
}

module.exports = carFinancing;
