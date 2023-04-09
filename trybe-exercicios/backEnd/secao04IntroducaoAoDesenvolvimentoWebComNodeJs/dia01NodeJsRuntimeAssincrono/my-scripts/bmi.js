const readline = require('readline-sync');
const weightInput = readline.questionFloat("What’s your weight? ");
const heightInput = readline.questionFloat("What’s your height? ");

const isUnderWeight = (currentBMI) => currentBMI < 18.5;
const isNormal = (currentBMI) => currentBMI >= 18.5 && currentBMI < 25;
const isOverWeight = (currentBMI) => currentBMI >= 25 && currentBMI < 30;
const isObese = (currentBMI) => currentBMI >= 30 && currentBMI < 35;
const isSeverelyObese = (currentBMI) => currentBMI >= 35 && currentBMI < 40;

function bmi(weight, height) {
  const result = (weight / (height ** 2)).toFixed(2);
  switch (true) {
    case isUnderWeight(result):
      console.log(`BMI: ${result}. Under Weight.`);
      break;
  
    case isNormal(result):
      console.log(`BMI: ${result}. Normal Weight.`);
      break;
  
    case isOverWeight(result):
      console.log(`BMI: ${result}. Over Weight.`);
      break;
  
    case isObese(result):
      console.log(`BMI: ${result}. Obese.`);
      break;
  
    case isSeverelyObese(result):
      console.log(`BMI: ${result}. Severely Obese.`);
      break;
  
    default:
      console.log(`BMI: ${result}. Morbidly Weight.`);
      break;
  };
};

bmi(weightInput, heightInput);
