const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
    let bestAlbuns = Object.values(data)[0][0]['bestAlbuns'].map(({ name }) => name).join();
    return `Os Melhores álbuns do Radiohead: ${bestAlbuns}`
}


module.exports = getBestAlbuns;
