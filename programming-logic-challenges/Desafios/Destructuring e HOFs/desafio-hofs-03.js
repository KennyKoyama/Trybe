const data = require('./data');

// 3 - Retorne um array utilizando HOF's que contenha apenas o nome das bandas

const getBandsName = () => {
    return data.bands.map(({ bandName }) => bandName)
}

module.exports = getBandsName;
