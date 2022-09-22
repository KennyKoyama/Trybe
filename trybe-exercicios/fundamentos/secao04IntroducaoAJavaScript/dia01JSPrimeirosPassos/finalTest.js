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


let chessPiece = 'kInG';
let chessPieceLowerCase = chessPiece.toLowerCase();
// Can save the value on the same string but I want print the original value
switch (chessPieceLowerCase) {
    
    case 'pawn':
        console.log(`${chessPiece} moves one square forward, two squares when on its start square and diagonal to capture enemy piece`);
        break;

    case 'knight':
        console.log(`${chessPiece} moves from one corner of any two-by-three rectangle to the opposite corner, can jump other pieces`);
        break;

    case 'bishop':
        console.log(`${chessPiece} move any number of squares diagonally without jumping`);
        break;

    case 'rook':
        console.log(`${chessPiece} move any number of squares vertically or horizontally without jumping`);
        break;

    case 'queen':
        console.log(`${chessPiece} move any number of squares vertically, horizontally, or diagonally without jumping`);
        break;

    case 'king':
        console.log(`${chessPiece} move to any adjoining square`);
        break;

    default:
        console.log(`${chessPiece} is not a valid chess piece`);
        break;
};


let score = Math.floor(Math.random() * 100);
if (score < 0 || score > 100 || typeof score != 'number') return `${score} in invalid`;
if (score >= 90) {
    console.log(`${score} is A`);
    // return 'A'
} else if (score >= 80 && score < 90) {
    console.log(`${score} is B`);
    // return 'B'
} else if (score >= 70 && score < 80) {
    console.log(`${score} is C`);
    // return 'C'
} else if (score >= 60 && score < 70) {
    console.log(`${score} is D`);
    // return 'D'
} else if (score >= 50 && score < 60) {
    console.log(`${score} is E`);
    // return 'E'
} else {
    console.log(`${score} is F`);
    // return 'F'
};


const isEven = a % 2 == 0 || b % 2 == 0 || c % 2 == 0;
console.log(`${a}, ${b} or ${c} is even? ${isEven}`);

const isOdd = a % 2 != 0 || b % 2 != 0 || c % 2 != 0;
console.log(`${a}, ${b} or ${c} is odd? ${isOdd}`);


const cost = a < b ? a + (a * 0.2) : b + (b * 0.2);
const price = a > b ? a : b;
if (cost < 0 || price < 0) return 'Invalid value';
const profitSelling1K = (price * 1000) - (cost * 1000);
console.log(`Price ${price} - cost ${cost} x 1000 = ${profitSelling1K}`);