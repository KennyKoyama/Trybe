const readJsonData = require("./fs/readJsonData");

const getBy = async (path, key) => {
  const db = await readJsonData(path);
  const selectedContent = db.find((content) => content[key] === Number(key));
  return selectedContent;
};

module.exports = getBy;