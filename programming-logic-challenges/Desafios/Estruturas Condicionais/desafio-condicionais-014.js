/*

14 - Caixa eletrônico

Um grande banco lhe contratou para fazer um programa para gerenciar um caixa eletrônico.
As máquinas deste banco só possuem notas de R$10, R$50 e R$100.

Para fazer este programa funcionar você deve coletar o saldo da pessoa e qual o valor do saque que ela quer fazer.

Se o valor passado no saque for zero ou não for um número, retorne a mensagem:
------------------------
Valor de saque inválido"
------------------------

Se o saque for maior que o saldo, retorne a mensagem:
--------------------
"Saldo insuficiente"
--------------------

É preciso levar em consideração o valor do saque com as possibilidades de notas do caixa eletrônico.

Caso o valor não se encaixe nas possibilidades, retorne a mensagem:
-------------------------------------------------------------
"Valor inválido para as notas disponíveis: R$10, R$50, R$100"
-------------------------------------------------------------

Se estiver tudo certo com o valor do saque, subtraia o valor do saldo e retorne a mensagem:
----------------------------------
"Saque efetuado! Novo saldo: R$30"
----------------------------------

*/


function ATM(balance, withdrew){
  // Desenvolva seu código nessa função
  // Se o valor passado no saque for zero ou não for um número, retorne a mensagem:
  if(withdrew == 0 || typeof withdrew != 'number') return 'Valor de saldo inválido';

  // Se o saque for maior que o saldo, retorne a mensagem:
  if(withdrew > balance) return 'Saldo insuficiente';

  // É preciso levar em consideração o valor do saque com as possibilidades de notas do caixa eletrônico.

  // Caso o valor não se encaixe nas possibilidades, retorne a mensagem:
  if(withdrew < 10 || withdrew % 10 != 0) return 'Valor inválido para as notas disponíveis: R$10, R$50, R$100';

  // Se estiver tudo certo com o valor do saque, subtraia o valor do saldo e retorne a mensagem:
  // "Saque efetuado! Novo saldo: R$30"
  return `Saque efetuado! Novo saldo: R\$${balance - withdrew}`

}

module.exports = ATM;
