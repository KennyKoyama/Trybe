/*

09 - Aprovação nos projetos

Aqui na Trybe você precisa entregar os projetos dentro de algumas regras para obter aprovação.

Escreva um algoritmo que recebe um objeto com a seguinte estrutura:
{
rec: bool,
reqs: number int,
allReqs: number int,
completed: number int,
}

Onde:
* rec: informando se a pessoa estudante está ou não em recuperação;
* reqs: são os requisitos obrigatórios;
* allReqs: são os requisitos obrigatórios mais os bônus:
* completed: quantidade de requisitos feitos, completados:

Considere as seguintes premissas:
* Se a pessoa não estiver em período de recuperação, é preciso entregar 80% ou mais dos requisitos obrigatórios para obter aprovação;
* Se a pessoa estiver em período de recuperação, é preciso entregar 90% dos requisitos totais (obrigatórios + bônus) para obter aprovação;

Caso a pessoa tenha conseguido entregar o projeto retorne:
----------------------------------
"Parabéns, você está aprovado(a)!"
----------------------------------

Caso a pessoa não tenha conseguido entregar o projeto retorne:
-----------------------------------------------
"Você ainda precisa entregar mais requisitos;)"
-----------------------------------------------

*/

function evaluateProject(obj){
  // Desenvolva seu código nessa função
  let checkRec = obj.rec;
  let checkReqs = obj.reqs;
  let checkTotalReqs = obj.totalReqs;
  let checkCompleted = obj.completed;
  let calc1 = Math.round((checkCompleted * 100) / checkReqs);
  let calc2 = Math.round((checkCompleted * 100) / checkTotalReqs);
  // Se não estiver em rec, é preciso reqs 80%+ para obter aprovação
  if(checkRec === false && calc1 >= 80) return 'Parabéns, você está aprovado(a)!';

  // Se estiver em rec, é preciso allReqs 90% (obrigatórios + bônus) para obter aprovação
  if(checkRec === true && calc2 >= 90) return 'Parabéns, você está aprovado(a)!';

  // Else
  return 'Você ainda precisa entregar mais requisitos ;)';
}

module.exports = evaluateProject;
