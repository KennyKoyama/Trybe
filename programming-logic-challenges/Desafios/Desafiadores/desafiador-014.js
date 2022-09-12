/*

14 - Soma de números primos

Escreva um algoritmo que some números primos de 0 à 150 e retorne o resultado. 

*/

function sumPrimesNumbers(){
  // Desenvolva seu código nessa função
  let result = 0;
  let min = 2;
  let max = 150;

  let isPrime = (num) => {
    let count = 0;
    let div = 1;
    while (div <= num) {
        if(num % div === 0) count++;
        if(count > 2) return false;
        div++;
    }
    return true
  };
  
  while (min < max){
    if(isPrime(min)) result += min;
    min++
  }
  return result
}

module.exports = sumPrimesNumbers;
