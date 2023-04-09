const readline = require('readline-sync');
const weightInput = readline.questionInt("What’s your weight?");
const heightInput = readline.questionFloat("What’s your height?");

function bmi(weight, height) {
  return weight / (height ** 2);
};

console.log(bmi(weightInput, heightInput));
