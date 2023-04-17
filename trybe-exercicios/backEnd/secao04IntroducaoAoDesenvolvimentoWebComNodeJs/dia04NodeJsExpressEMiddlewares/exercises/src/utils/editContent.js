const readJsonData = require("./fs/readJsonData");
const writeJsonData = require("./fs/writeJsonData");

const editContent = async (path, id, newData) => {
  const db = await readJsonData(path);
  const selectedContent = db.find((content) => content.id === Number(id));
  console.log(selectedContent);
  const updatedContent = { ...selectedContent, ...newData };
  const updatedDB = db.map((content) => content.id === Number(id) ? updatedContent : content);
  writeJsonData(path, updatedDB)

  return updatedContent;
};

module.exports = editContent;