const searchEmployee = require('./searchEmployee');

describe('Test searchEmployee function', () => {
  it('Test if searchEmployee has been defined', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Test if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('ID 4678-2 and detail lastName to be lastname is Dodds', () => {
    expect(searchEmployee('4678-2', 'lastName')).toBe('lastName is Dodds');
  });
  it('ID 4678-2 and detail likesPizza to be Informação indisponível', () => {
    expect(searchEmployee('4678-2', 'likesPizza')).toBe('Informação indisponível');
  });
  it('ID 4678-5 and detail lastName to be ID não identificada', () => {
    expect(searchEmployee('4678-5', 'lastName')).toBe('ID não identificada');
  });
})