const score = Math.floor(Math.random() * 100);

// Using conditional ternary
console.log('Using ternary:');
const isApproved = score < 60 ? console.log(`Your score is ${score}. Sorry, you've not been approved!`)
                 : score < 80 ? console.log(`Your score is ${score}. You're on our waiting list!`)
                 : console.log(`Your score is ${score}. Congrats, you've been approved!`);


// Using conditional if and else:
let result;
console.log('\nUsing if and else:');
if (typeof score != 'number') return `Value ${score} is invalid.`;
if (score >= 80) {
    result = `Your score is ${score}. Congrats, you've been approved!`;
} else if (score < 80 && score >= 60) {
    result = `Your score is ${score}. You're on our waiting list!`;
} else {
    result = `Your score is ${score}. Sorry, you've not been approved!`;
};

console.log(result);