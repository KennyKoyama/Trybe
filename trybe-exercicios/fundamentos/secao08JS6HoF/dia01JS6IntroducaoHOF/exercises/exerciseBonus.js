const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
// console.log(battleMembers)
// Parte I
// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo
// Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os
// resultados da rodada.
const randomNum = (maxNum) => Math.round(Math.random() * maxNum);

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength
// (dano máximo).
const dragonDmg = (currDamage) => currDamage < 15 ? 15
                      : currDamage;

// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo)
// e o valor de strength * weaponDmg (dano máximo).
const warriorDmg = (currDamage) => currDamage < warrior.strength ? warrior.strength
                                 : currDamage;

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano
// e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo)
// e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso
// o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui
// mana suficiente”) e a mana gasta é 0.
const mageDmg = (currDamage) => currDamage < mage.intelligence ? mage.intelligence
                              : currDamage;
let mageMana = mage.mana;
const mageStatus = () => {
  mageMana -= 15;
  let current = mageMana;
  let result = current > 15 ? {dmg: mageDmg(randomNum(mage.intelligence * 2)), mana: mageMana} : 'Não possui mana suficiente';
  return result;
};

