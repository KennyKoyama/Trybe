const readJsonData = require("./fs/readJsonData");

const generateNewID = async (path) => {
  const db = await readJsonData(path);
  const lastId = db[db.length - 1].id || 0;
  return lastId + 1;
};

module.exports = generateNewID;