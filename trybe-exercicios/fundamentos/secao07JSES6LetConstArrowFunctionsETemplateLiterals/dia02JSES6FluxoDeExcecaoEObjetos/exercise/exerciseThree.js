const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const addShift = (obj, key, value) => obj[key] = value;
addShift(lesson2, 'turno', 'noite');

const printKeys = (obj) => console.log(Object.keys(obj));
printKeys(lesson1);

const printLength = (obj) => console.log(Object.entries(obj).length);
printLength(lesson3);

const printValues = (obj) => console.log(Object.values(obj));
printValues(lesson1);

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});
console.log(allLessons);

const totalStudents = (...objs) => objs.reduce((total, obj) => total + obj.numeroEstudantes, 0);
console.log(totalStudents(lesson1, lesson2, lesson3));

const getValueByNumber = (obj, index) => Object.values(obj)[index];
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'

const verifyPair = (obj, key, value) => Object.hasOwn(obj, key) && obj[key] === value;
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false


// 🚀 Bônus - Organizando lições
const studentsBySubject = (objs, value) => Object.values(objs)
                                                 .filter((obj) => obj.materia === value)
                                                 .map((obj) => obj.numeroEstudantes)
                                                 .reduce((total, current) => total + current, 0);
console.log(studentsBySubject(allLessons, 'Matemática'));

const subjectsByTeacher = (objs, value) => Object.values(objs)
                                                 .filter((obj) => obj.professor === value)
                                                 .map((obj) => obj.materia);
console.log(subjectsByTeacher(allLessons, 'Maria Clara'));

const studentsByTeacher = (objs, value) => Object.values(objs)
                                                 .filter((obj) => obj.professor === value)
                                                 .map((obj) => obj.numeroEstudantes)
                                                 .reduce((total, current) => total + current, 0);
console.log(studentsByTeacher(allLessons, 'Maria Clara'));

const createReport = (objs, value) => ({professor: value,
                                            aulas: subjectsByTeacher(objs, value),
                                       estudantes: studentsByTeacher(objs, value)});
console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */