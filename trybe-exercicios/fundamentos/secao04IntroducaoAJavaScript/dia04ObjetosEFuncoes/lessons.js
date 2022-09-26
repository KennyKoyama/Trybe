let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 }
};

console.log(`Player ${player.name} ${player.lastName}, ${player.age} years old, won ${player.medals['golden']} Gold Medals and ${player.medals['silver']} Silver Medals.`);
