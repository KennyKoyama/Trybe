const simpsonsDB = require('./simpsons.json');
const fs = require('fs').promises;

// A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem
// no formato id - Nome.Por exemplo: 1 - Homer Simpson.
function printAllSimpsons() {
  simpsonsDB.forEach((character) => console.log(`${character.id} - ${character.name}`));
};

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne
// uma Promise que é resolvida com os dados da personagem que possui o id informado.
// Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo
// “id não encontrado”.
function characterByID(id) {
  const result = simpsonsDB.find(character => character.id === id);
  const promise = new Promise((resolve, reject) => {
    if (!result) reject(new Error('id not found.'));
    resolve(result);
  })
  return promise;
};

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens
// com id 10 e 6.
async function removeFromSimpsons() {
  const result = simpsonsDB.filter(character => character.id !== '10' && character.id !== '6');
  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(result));
    console.log('Arquivo atualizado com sucesso!');
  } catch (err) {
    console.error(`Erro ao atualizar o arquivo: ${err.message}`);
  }
}

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo,
// chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function familyFromSimpsons() {
  const result = simpsonsDB.filter(character => character.id === '1' || character.id === '4');
  try {
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
    console.log('Arquivo criado com sucesso!');
  } catch (err) {
    console.error(`Erro ao criar o arquivo: ${err.message}`);
  }
}

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem
// Nelson Muntz.
async function addToFamilySimpsons() {
  const familyDB = require('./simpsonsFamily.json');
  const result = [
    ...familyDB,
    simpsonsDB.find(character => character.name === 'Nelson Muntz'),
  ];

  try {
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
    console.log('Arquivo atualizado com sucesso!');
  } catch (err) {
    console.error(`Erro ao atualizar o arquivo: ${err.message}`);
  }
}

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem
// Maggie Simpson no arquivo simpsonFamily.json.;
async function updateFamilySimpsons() {
  const familyDB = require('./simpsonsFamily.json');
  const result = familyDB.map(character => (
    character.name === 'Nelson Muntz'
      ? simpsonsDB.find(character => character.name === 'Maggie Simpson')
      : character
  ));

  try {
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(result));
    console.log('Arquivo atualizado com sucesso!');
  } catch (err) {
    console.error(`Erro ao atualizar o arquivo: ${err.message}`);
  }
}

