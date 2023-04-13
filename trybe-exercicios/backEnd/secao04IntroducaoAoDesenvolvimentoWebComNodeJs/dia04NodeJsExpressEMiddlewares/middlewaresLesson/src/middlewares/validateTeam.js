const getTeams = require("../utils/getTeams");

const validateTeam = async (req, res, next) => {
  const { nome, sigla } = req.body;
  const teams = await getTeams();
  if (!nome) return res.status(400).json({ message: 'O campo "nome" é obrigatório'});
  if (!sigla) return res.status(400).json({ message: 'O campo "sigla" é obrigatório' });
  if (teams.some((team) => team.sigla === sigla)) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  next();
};

module.exports = validateTeam;
