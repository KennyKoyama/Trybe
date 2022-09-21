const score = Math.floor(Math.random() * 100);

//Using conditional ternary
const isApproved = score < 60 ? console.log(`Your score is ${score}. Sorry, you've not been approved!`)
                 : score < 80 ? console.log(`Your score is ${score}. You're on our waiting list!`)
                 : console.log(`Your score is ${score}. Congrats, you've been approved!`);