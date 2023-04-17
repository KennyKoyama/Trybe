const readJsonData = require("./fs/readJsonData");

const getByID = async (path, id) => {
  const db = await readJsonData(path);
  const selectedContent = db.find((content) => content.id === Number(id));
  return selectedContent;
};

module.exports = getByID;