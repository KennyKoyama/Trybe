const getTeams = require("../utils/getTeams");

const existingId = async (req, res, next) => {
  const id = Number(req.params.id);
  const teams = await getTeams();

  if (!teams.some((team) => team.id === id) ) {
    return res.status(400).json({ message: 'Time não encontrado' }); // Ou já responde avisando que deu errado
  }
  next(); // Chama o próximo middleware
};

module.exports = existingId;
