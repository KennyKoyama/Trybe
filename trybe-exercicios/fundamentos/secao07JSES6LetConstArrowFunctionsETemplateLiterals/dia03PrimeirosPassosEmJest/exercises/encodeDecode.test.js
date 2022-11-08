const {encode, decode} = require('./encodeDecode');

describe('Test encode and decode functions', () => {
  // Teste se encode e decode são funções;
  it('Check if encode and decode are functions', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
  it('encode("a, e, i, o, u") returns 1, 2, 3, 4, 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });

  // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
  it('decode("1, 2, 3, 4, 5") returns a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });

  // Teste se as demais letras/números não são convertidos para cada caso;
  it('Check if encode and decode works properly', () => {
    expect(encode('b, c, d, f, g')).toBe('b, c, d, f, g');
    expect(decode('6, 7, 8, 9, 0')).toBe('6, 7, 8, 9, 0');
  });

  // Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.
  it('Check if encode and decode returns results with the same length of the input', () => {
    expect(encode('abcdefghij')).toHaveLength(10);
    expect(decode('1234567890')).toHaveLength(10);
  });
});