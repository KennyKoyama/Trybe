const sum = require('./sum');

describe('Test sum function:', () => {
  // Teste se o retorno de sum(4, 5) é 9
  it('Sum of 4 and 5 to be equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  // Teste se o retorno de sum(0, 0) é 0
  it('Sum of 0 and 0 to be equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
  it('Sum of 4 and "5" to throw a error', () => {
    expect(() => {sum(4, '5')}).toThrow();
  });
  // Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
  it('Sum of 4 and "5" to throw a error', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  });
})