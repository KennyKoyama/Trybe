// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando
// uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para
// criar cada pessoa contratada em seu respectivo id. A sua função deve receber como
// parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente
// um email no formato nome_da_pessoa@trybe.com


const newEmployees = (employee1, employee2, employee3) => {
  const employees = {
    id1: employee1, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee2, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee3, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const newEmp = (fullName) => ( { nomeCompleto: fullName, email: `${fullName.split(' ')[0].toLowerCase()}@trybe.com` } );

console.log(newEmployees(newEmp('Pedro Guerra'),newEmp('Luiza Drumond'),newEmp('Carla Paiva')));


