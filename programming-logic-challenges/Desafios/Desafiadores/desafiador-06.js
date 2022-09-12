/*

6 - Analise de preços da lista de compras

Escreva um algoritmo que irá receber um array de produtos e retorne uma string no formato da saída que contem:

* O produto com maior preço;
* O preço do produto;
* A média do preços dos produtos.

Por exemplo:
---------------------------------------------------------------------------------------------------
Entrada:
[
  { name: 'lápis', price: 2 },
  { name: 'borracha', price: 4 },
  { name: 'caneta', price: 5 },
  { name: 'régua', price: 6 },
  { name: 'apontador', price: 3 },
  { name: 'teclado gamer', price: 180 },
  { name: 'mochila', price: 33 },
  { name: 'fone de ouvido', price: 57 },
  { name: 'mousepad', price: 35 },
]

Saída:
"O produto mais caro é teclado gamer e custa: R$ 180, a média de preços dos produtos é de: R$36.11."
----------------------------------------------------------------------------------------------------

*/

function productAnalysis(products){ // corrigir nome
  // Desenvolva seu código nessa função
  let average = products.reduce((sum, curr) => sum + curr['price'],0) / products.length;
  let sorted = [...products].sort((a,b) => b['price'] - a['price']);
  let result = `O produto mais caro é ${sorted[0]['name']} e custa: R$ ${sorted[0]['price']}, a média de preços dos produtos é de: R$${average.toFixed(2)}.`;
  return result
}

module.exports = productAnalysis;

