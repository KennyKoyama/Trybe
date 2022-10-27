const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// Para o próximo exercício você deve criar um novo array de objetos a partir das
// informações de students e grades, onde cada objeto desse novo array terá o
// formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir
// que a posição 0 de grades refere-se ao estudante na posição 0 de students.
// Para resolver este exercício, além de reduce, será necessário utilizar também a
// função map.

function studentAverage() {
  // escreva seu código aqui
  return students.reduce((acc, curr, i) => acc.concat({ name: curr, average : grades[i].reduce((acc, curr) => acc + curr) / grades[i].length}), []);
};

// One line receiving arguments
const studentAverageArrow = (studentNames, studentGrades) =>
  studentNames.reduce((array, currentName, index) => 
      array.concat(
        {
          name: currentName,
          average: studentGrades[index]
            .reduce((sum, currentGrade) => sum + currentGrade) / studentGrades[index].length
        }
      ),
    []
  );

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
]

