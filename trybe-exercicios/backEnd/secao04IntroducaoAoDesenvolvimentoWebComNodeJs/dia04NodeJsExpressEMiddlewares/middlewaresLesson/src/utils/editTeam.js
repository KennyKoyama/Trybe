const { TEAMS_PATH } = require("../files/PATHS");
const readJsonData = require("./fs/readJsonData");
const writeJsonData = require("./fs/writeJsonData");

const editTeam = async (id, newData) => {
  const teams = await readJsonData(TEAMS_PATH);
  const selectedTeam = teams.find((team) => team.id === Number(id));
  const updatedTeam = { ...selectedTeam, ...newData };
  const updatedTeams = teams.map((team) => team.id === Number(id) ? updatedTeam : team);
  writeJsonData(TEAMS_PATH, updatedTeams)

  return updatedTeam;
};

module.exports = editTeam;