const data = require('./data.js');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
const getBandsInformation = () => {
    let arr = [Object.values(data)[0][0], Object.values(data)[0][1]];
    return arr
}

module.exports = getBandsInformation;
