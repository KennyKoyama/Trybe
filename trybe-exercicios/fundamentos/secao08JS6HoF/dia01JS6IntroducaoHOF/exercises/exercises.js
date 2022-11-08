// Nova pessoa contratada
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


// Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número
// aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa
// se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma
// string (Ex: “Tente novamente” ou “Parabéns você ganhou”).
const sortNumber = () => Math.ceil(Math.random() * 5);
const isWinner = (bet, result) => bet === result ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(isWinner('2', sortNumber()))


// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos
// acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas
// fornecidas pela pessoa estudante. Utilize os seguintes arrays:
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScore = (rightAnswers, studentAnswers, funct) => funct(rightAnswers,studentAnswers).reduce((sum, curr) => sum + curr, 0);

const scores = (right, student) => student.map((studentAnswers, index) => studentAnswers === right[index] ? 1 : studentAnswers === 'N.A' ? 0 : -0.5);

console.log(checkScore(RIGHT_ANSWERS, STUDENT_ANSWERS, scores))