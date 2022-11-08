let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(`A variável patientId é do tipo primitivo ${typeof patientId}`)
console.log(`A variável isEnrolled é do tipo primitivo ${typeof isEnrolled}`)
console.log(`A variável patientInfo é do tipo primitivo ${typeof patientInfo}`)
console.log(`A variável patientEmail é do tipo primitivo ${typeof patientEmail}`)

console.log(`A variável patientAge é do tipo primitivo ${typeof patientAge} pois ela não foi declarada`)

patientId = '50';
console.log(`A variável patientId mudou para o tipo primitivo ${typeof patientId}`)
