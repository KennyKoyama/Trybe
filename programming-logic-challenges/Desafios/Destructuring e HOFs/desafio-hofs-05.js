const data = require('./data');

// 5 - Filtre e retorne um array com as informações das bandas que contenham 'Rock' no gênero musical

const rockFilter = () => {
    let filtered = data.bands.filter(({ genre }) => genre == 'Rock');
    return filtered
}

module.exports = rockFilter;
