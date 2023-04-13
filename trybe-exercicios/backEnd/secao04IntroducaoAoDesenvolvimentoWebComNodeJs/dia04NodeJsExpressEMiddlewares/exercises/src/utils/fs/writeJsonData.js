const fs = require('fs').promises;

const writeJsonData = async (path, data) => {
  try {
    fs.writeFile(path, JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Movie successfully added');
    });
    return data;
  } catch (err) {
    console.error(err.message);
    throw new Error(err.message);
  }
};

module.exports = writeJsonData;