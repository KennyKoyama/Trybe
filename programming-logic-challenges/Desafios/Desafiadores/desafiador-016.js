/*

16 - Validação de CPF

Escreva uma algoritmo que recebe uma string no formato de um CPF `xxx.xxx.xxx-xx` e verifica se o mesmo é válido.

Considere um CPF com os seguintes dígitos: `abc.def.ghi-jk`

Para descobrirmos o primeiro dígito verificador `j`, procedemos da seguinte maneira: multiplicamos o primeiro dígito por 1, 
o segundo por 2, o terceiro por 3, o quarto por 4 e vamos assim até multiplicarmos o nono por 9. Então, somamos tudo isso. 
Em seguida, devemos obter o resto da divisão dessa soma por 11.
Caso o resto seja 10, o dígito `j` deve ser igual a 0. 

Para o segundo dígito verificador `k`, temos o seguinte: multiplicamos o segundo digito por 1, o terceiro por 2, o quarto por 3 
e vamos assim até multiplicarmos o décimo (primeiro dígito verificador) por 9. Então, somamos tudo isto. O dígito `k` será o 
resto da divisão dessa soma por 11.
Caso o resto seja 10, o dígito `k` deve ser igual a 0. 

Sabendo que isso vale para 100% dos CPFs, sua missão é implementar uma função que, dado um CPF, diga se ele é válido ou não.


***Importante***:
Uma sequência de números iguais, como por exemplo `'000.000.000-00'`, também é um CPF inválido 😉 

Exemplo De CPF Válido:
----------------------
Entrada:
"397-606-448-34"

Saída:
"CPF inválido"
----------------------

Exemplo De CPF Inválido:
------------------------
Entrada:
"166.354.840-43"

Saída: "CPF válido"
------------------------

*/

function cpfValidator(cpf){
  // Desenvolva seu código nessa função
  let clean = cpf.split('').filter((digit) => /[0-9]/.test(digit));
  if(clean.every((value) => value == clean[0])) return 'CPF inválido';
  let d1 = Number(clean[0]);
  let d2 = Number(clean[1]);
  let d3 = Number(clean[2]);
  let d4 = Number(clean[3]);
  let d5 = Number(clean[4]);
  let d6 = Number(clean[5]);
  let d7 = Number(clean[6]);
  let d8 = Number(clean[7]);
  let d9 = Number(clean[8]);
  let check1 = Number(clean[9]);
  let check2 = Number(clean[10]);

  let diff1 = ((d1*1) + (d2*2) + (d3*3) + (d4*4) + (d5*5) + (d6*6) + (d7*7) + (d8*8) + (d9*9)) % 11;
  let first = diff1 == 10 ? 0 : diff1;
  let diff2 = ((d9*1) + (d8*2) + (d7*3) + (d6*4) + (d5*5) + (d4*6) + (d3*7) + (d2*8) + (d1*9)) % 11;
  let second = diff2 == 10 ? 0 : diff2;
  let result = first == check1 && second == check2 ? 'CPF válido' : 'CPF inválido';

  return result
}

module.exports = cpfValidator;
