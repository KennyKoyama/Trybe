const currentHour = Math.floor(Math.random() * 24);

let message;
if (typeof currentHour != 'number') return `Value ${currentHour} is invalid!`;

if (currentHour >= 22) {
    message = `It's ${currentHour} o'clock. We shouldn't eat anything, it's time to sleep.`;
} else if (currentHour >= 18 && currentHour < 22) {
    message = `It's ${currentHour} o'clock. Chow time! Let's have dinner! :D`;
} else if (currentHour >= 14 && currentHour < 18) {
    message = `It's ${currentHour} o'clock. Shall we bake a cake for afternoon coffee?`;
} else if (currentHour >= 11 && currentHour < 14) {
    message = `It's ${currentHour} o'clock. Lunch time!`;
} else if (currentHour >= 4 && currentHour < 11) {
    message = `It's ${currentHour} o'clock. Hmmm, smell of freshly brewed coffee!`;
} else {
    message = `It's ${currentHour} o'clock. You should be sleeping!`;
};

console.log(message);


let weekDay = 'Wednesday';

if (weekDay === 'Monday' || weekDay === 'Tuesday' || weekDay === 'Wednesday' || weekDay === 'Thursday' || weekDay === 'Friday') {
    console.log('Yay, another day of learning at Trybe! >:D');
} else {
    console.log('FINALLY, well deserved rest!');
};
