const { TEAMS_PATH } = require("../files/PATHS");
const readJsonData = require("./fs/readJsonData");

const getTeams = () => {
  const teams = readJsonData(TEAMS_PATH);
  return teams;
};

module.exports = getTeams;