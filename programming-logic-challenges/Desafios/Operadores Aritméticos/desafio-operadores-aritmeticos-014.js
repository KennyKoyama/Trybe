/*

14 - Tempo de viagem

Escreva um algoritmo que recebe a duração total de uma viagem em minutos e retorne a duração em horas e minutos no seguinte formato:

--------------------------------------------------
"A viagem terá duração de x hora(s) e y minuto(s)"
--------------------------------------------------

*/

function timeTravel(minutes){
  // Desenvolva seu código nessa função
  let h = Math.floor(minutes / 60);
  let m = minutes - (h * 60);
  return `A viagem terá duração de ${h} hora(s) e ${m} minuto(s)`
}

module.exports = timeTravel;
