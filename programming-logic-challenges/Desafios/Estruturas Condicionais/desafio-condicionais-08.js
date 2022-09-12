/*

08 - Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------

*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
  // Desenvolva seu código nessa função
  if(marinaAge < silviaAge && marinaAge < izaAge) return `Marina é a mais jovem e possui ${marinaAge} anos de idade.`;
  if(marinaAge > silviaAge && silviaAge < izaAge) return `Silvia é a mais jovem e possui ${silviaAge} anos de idade.`;
  
  return `Iza é a mais jovem e possui ${izaAge} anos de idade.`;
}

module.exports = findYoungerPerson;
