const data = require('./data');

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
    let filtered = []
    data.bands.map(({ bandName, country }) => country == 'United States' ? filtered.push(bandName):null );
    return filtered
}

module.exports = usaFilter;
