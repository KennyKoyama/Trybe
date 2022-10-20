const myFizzBuzz = require('./myFizzBuzz');

describe('Test myFizzBuzz function', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  it('Check if myFizzBuzz(15) returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  it('Check if myFizzBuzz(9) returns fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  it('Check if myFizzBuzz(10) returns buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
  it('Check if myFizzBuzz(8) returns 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });

  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  it('Check if myFizzBuzz("15") returns false', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });
});