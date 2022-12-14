/*

10 - Telefone desconfigurado

Um banco de dados possui uma série de números de telefone, mas cada um com um padrão diferente.
Alguns têm espaço, outros não, alguns sem traço, outros não, alguns com parênteses, outros não,
e toda sorte de combinações possíveis e imagináveis.

Crie uma função que receba um número de telefone desconfigurado
e retorne o número de telefone formatado, com suporte ao dígito 9
de prefixo nos celulares, mas funcionando normalmente sem esse prefixo.

O que será avaliado?
- Ao enviar como parâmetro 11 97878-7878 a função deve retornar (11) 9 7878-7878;
- Se o parâmetro for (11)78787878 a função deve retornar (11) 7878-7878;
- Se o parâmetro for 1178787878 a função deve retornar (11) 7878-7878;
- E se não for um número de telefone válido a função deve retornar o parâmetro; logo:
- Se o parâmetro for 234 a função deve retornar 234;

*/

function telephoneFormat(string) {
  // Desenvolva seu código nessa função
  let regX = /[0-9]/;
  let clean = String(string).split('').filter((digit) => regX.test(digit));
  let size = clean.length;
  if(size > 11 || size < 8) return string;
  let result = '('
  clean.forEach((value, index) => {
    if(index < 2) result += value;
    if(index === 2) result += (`) ${value}`);
    if(index === 2 && size === 11) result += ' ';
    if(index > 2) result += value;
    if(index === 5 && size === 10) result += (`-`);
    if(index === 6 && size === 11) result += (`-`);
  });
  return result
}

module.exports = telephoneFormat;
