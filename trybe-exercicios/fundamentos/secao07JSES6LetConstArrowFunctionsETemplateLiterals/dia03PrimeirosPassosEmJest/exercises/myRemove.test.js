const myRemove = require('./myRemove');

describe('Teste myRemove function', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('myRemove([1, 2, 3, 4], 3) to be equal [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('myRemove([1, 2, 3, 4], 3) to not be equal [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('myRemove([1, 2, 3, 4], 5) to be equal [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});