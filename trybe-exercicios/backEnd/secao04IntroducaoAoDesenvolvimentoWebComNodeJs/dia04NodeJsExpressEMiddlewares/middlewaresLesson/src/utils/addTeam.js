const { TEAMS_PATH } = require("../files/PATHS");
const readJsonData = require("./fs/readJsonData");
const writeJsonData = require("./fs/writeJsonData");
const getNewId = require("./getNewId");

const addTeam = async (teamData) => {
  const teams = await readJsonData(TEAMS_PATH);
  const id = await getNewId();
  const newTeam = { id, ...teamData };
  const updatedTeams = [ ...teams, newTeam ];
  writeJsonData(TEAMS_PATH, updatedTeams)

  return newTeam;
};

module.exports = addTeam;