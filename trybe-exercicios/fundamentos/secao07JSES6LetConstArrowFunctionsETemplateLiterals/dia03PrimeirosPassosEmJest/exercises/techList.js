const techArr = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
const student = 'Lucas';

const techList = (techs, name) => techs.length === 0 ? 'Vazio!'
                                : techs.sort().map((tech) => ({tech: tech, name: name}));

module.exports = techList;