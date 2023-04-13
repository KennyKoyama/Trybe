const readJsonData = require("./fs/readJsonData");

const getDB = async (path) => {
  const db = await readJsonData(path);
  return db;
};

module.exports = getDB;