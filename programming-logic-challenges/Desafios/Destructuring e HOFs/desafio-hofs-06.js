const data = require('./data');

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
    let albuns = data.bands.map(({ bestAlbuns }) => bestAlbuns);
    let cleanAlbuns = [];
    albuns.forEach((elem)=>{
    elem.forEach((albuns) =>{
    if(albuns.rate === 100) cleanAlbuns.push(albuns);
  })
})
    return cleanAlbuns
}

module.exports = highestRatingFilter;
