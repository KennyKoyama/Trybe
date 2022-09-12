/*

11 - Loja de ração

Escreva uma algoritmo para uma loja de ração que recebe o preço de um produto e retorna as formas de pagamentos disponíveis.

Considere as seguintes premissas:
* À vista possui 10% de desconto e parcelado em 4x possui juros de 15%.

Exemplo:
-------------------------------
Entrada: 
80

Saída:
"À Vista: R$72,00 ou 4x de: R$23,00"
-------------------------------

Obs: seguir o mesmo formato de retorno da mensagem de saída.

*/

function paymentOptions(price) {
  // Desenvolva seu código nessa função
  let aVista = price - (price * 0.10);
  let parcelado = Number.isInteger((price + (price * 0.15)) / 4) ? ((price + (price * 0.15)) / 4) : ((price + (price * 0.15)) / 4).toFixed(2);
  return `À Vista: R$${aVista} ou 4x de: R$${parcelado}`
}

module.exports = paymentOptions;
