let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);

const sum = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
const remainder = a % b;
const exponent = a ** b;

const greater = a > b ? a : b;
const greaterBetween3 = greater > c ? greater : c;

const isPositive = (value) => value > 0 ? 'Positive' 
                            : value < 0 ? 'Negative'
                            : value === 0 ? 'Zero'
                            : 'Invalid value';
console.log(isPositive(1));
console.log(isPositive(-1));
console.log(isPositive(0));

