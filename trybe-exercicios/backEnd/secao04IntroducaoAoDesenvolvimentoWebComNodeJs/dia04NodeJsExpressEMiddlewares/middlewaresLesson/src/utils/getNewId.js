const { TEAMS_PATH } = require("../files/PATHS");
const readJsonData = require("./fs/readJsonData");

const getNewId = async () => {
  const teams = await readJsonData(TEAMS_PATH);
  const lastId = teams[teams.length - 1].id;
  return lastId + 1;
};

module.exports = getNewId;