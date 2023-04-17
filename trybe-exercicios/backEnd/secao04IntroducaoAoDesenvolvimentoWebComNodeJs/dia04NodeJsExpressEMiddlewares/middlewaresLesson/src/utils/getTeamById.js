const { TEAMS_PATH } = require("../files/PATHS");
const readJsonData = require("./fs/readJsonData");

const getTeamById = async (id) => {
  const teams = await readJsonData(TEAMS_PATH);
  const selectedTeam = teams.find((team) => team.id === Number(id));
  return selectedTeam;
};

module.exports = getTeamById;