const { TEAMS_PATH } = require("../files/PATHS");
const readJsonData = require("./fs/readJsonData");
const writeJsonData = require("./fs/writeJsonData");

const deleteTeam = async (id) => {
  const teams = await readJsonData(TEAMS_PATH);
  let deletedTeam;
  const updatedTeams = teams.filter((team) => {
    if (team.id !== Number(id)) return true;
    deletedTeam = team;
    return false;
  });
  writeJsonData(TEAMS_PATH, updatedTeams)

  return deletedTeam;
};

module.exports = deleteTeam;