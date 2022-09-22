let a = Math.floor(Math.random() * 90);
let b = Math.floor(Math.random() * 90);
let c = Math.floor(Math.random() * 90);
console.log(`a = ${a}  b = ${b}  c = ${c}`);

const sum = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;
const exponent = a ** b;
console.log(`${a} + ${b} = ${sum}`);
console.log(`${a} - ${b} = ${subtraction}`);
console.log(`${a} x ${b} = ${multiplication}`);
console.log(`${a} / ${b} = ${division}`);
console.log(`${a} % ${b} = ${remainder}`);
console.log(`${a} ** ${b} = ${exponent}`);

const greater = a > b ? a : b;
const greaterBetween3 = greater > c ? greater : c;
console.log(`Greater between ${a} and ${b} = ${greater}`);
console.log(`Greater between ${a}, ${b} and ${c} = ${greaterBetween3}`);

const isPositive = (value) => value > 0 ? 'Positive' 
                            : value < 0 ? 'Negative'
                            : value === 0 ? 'Zero'
                            : 'Invalid value';
console.log(`1 is ${isPositive(1)}`);
console.log(`-1 is ${isPositive(-1)}`);
console.log(`0 is ${isPositive(0)}`);

const isTriangle = (angleA, angleB, angleC) => angleA < 0 || angleB < 0 || angleC < 0 ? 'Invalid angle'
                                             : angleA + angleB + angleC === 180;
console.log(`angle A ${a}, angle B ${b} and angle C ${c} is triangle? ${isTriangle(a, b, c)}`);
console.log(`angle A ${45}, angle B ${45} and angle C ${90} is triangle? ${isTriangle(45, 45, 90)}`);