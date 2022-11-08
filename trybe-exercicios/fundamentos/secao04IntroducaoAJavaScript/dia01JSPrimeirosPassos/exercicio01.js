const myName = 'Kenny';
const birthCity = 'Rio de Janeiro';
let birthYear = 1982;

console.log(`Me chamo ${myName}, nasci em ${birthYear} na cidade do ${birthCity}.`)

let diff = 2030 - birthYear;
birthYear += diff;

console.log(`Agora eu nasci no ano de ${birthYear}, sim, eu vim do futuro! lol`)

birthCity = 'São Paulo';

console.log(`Não da para alterar uma constante. ${birthCity}`)