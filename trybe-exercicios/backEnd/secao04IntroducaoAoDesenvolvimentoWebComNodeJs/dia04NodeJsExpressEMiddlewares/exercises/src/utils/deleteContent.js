const readJsonData = require("./fs/readJsonData");
const writeJsonData = require("./fs/writeJsonData");

const deleteContent = async (path, id) => {
  const db = await readJsonData(path);
  let deletedContent;
  const updatedDB = db.filter((content) => {
    if (content.id !== Number(id)) return true;
    deletedContent = content;
    return false;
  });
  writeJsonData(path, updatedDB);

  return deletedContent;
};

module.exports = deleteContent;