/*

09 - Programas de TV

Você foi a pessoa designada para escrever um algoritmo que classifica programas de TV para telespectadores.

Você irá receber um objeto com 3 atributos: idade (int), país (string), gostaDeEsportes (bool).

Caso a pessoa goste de Esportes, tem 16 anos ou mais e mora no Brasil, retorne:
------
"UFC."
------

Caso ela tenha o mesmo perfil do UFC, porém não gosta de Esportes, retorne:
---------------
"The Simpsons."
---------------

Caso a pessoa tenha menos de 16 anos, more no Chile e não goste de Esportes, retorne:
-----------------------------
"The Penguins of Madagascar."
-----------------------------

Caso a pessoa tenha menos de 16 anos, goste de Esportes e more em um país que não seja o Chile, retorne:
----------------
"Sport Fishing."
----------------

Caso a pessoa não se enquadre nessas categorias acima, retorne:
------------------------------------------------
"Não foi possível dizer o que ela deve assistir."
------------------------------------------------

*/

function viewerTvShows(dataViewer){
  // Desenvolva seu código nessa função
  //Você irá receber um objeto com 3 atributos: idade (int), país (string), gostaDeEsportes (bool).
  //Caso a pessoa goste de Esportes, tem 16 anos ou mais e mora no Brasil, retorne: "UFC."
  if(dataViewer.likeSports === true && dataViewer.age >= 16 && dataViewer.country === 'Brasil') return 'UFC.';

  //Caso ela tenha o mesmo perfil do UFC, porém não gosta de Esportes, retorne: "The Simpsons."
  if(dataViewer.likeSports === false && dataViewer.age >= 16 && dataViewer.country === 'Brasil') return 'The Simpsons.';

  //Caso a pessoa tenha menos de 16 anos, more no Chile e não goste de Esportes, retorne: "The Penguins of Madagascar."
  if(dataViewer.likeSports === false && dataViewer.age < 16 && dataViewer.country === 'Chile') return 'The Penguins of Madagascar.';

  // Caso a pessoa tenha menos de 16 anos, goste de Esportes e more em um país que não seja o Chile, retorne: "Sport Fishing."
  if(dataViewer.likeSports === true && dataViewer.age < 16 && dataViewer.country !== 'Chile') return 'Sport Fishing.';

  //Caso a pessoa não se enquadre nessas categorias acima, retorne: "Não foi possível dizer o que ela deve assistir."
  return 'Não foi possível dizer o que ela deve assistir.'

}

module.exports = viewerTvShows;
