const readJsonData = require("./fs/readJsonData");
const writeJsonData = require("./fs/writeJsonData");
const generateNewID = require("./generateNewID");

// {
//   "name": "Trekking",
//   "price": 0,
//   "description": {
//     "rating": 5,
//     "difficulty": "Fácil",
//     "createdAt": "10/08/2022"
//   }
// }

const addContent = async (path, data) => {
  const db = await readJsonData(path);
  const id = await generateNewID(path);
  const newContent = { id, ...data };
  const updatedDB = [ ...db, newContent ];
  writeJsonData(path, updatedDB)

  return newContent;
};

module.exports = addContent;