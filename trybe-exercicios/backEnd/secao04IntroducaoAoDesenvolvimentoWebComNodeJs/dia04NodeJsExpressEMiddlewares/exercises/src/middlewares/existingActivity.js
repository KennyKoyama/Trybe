const { ACTIVITIES_PATH } = require("../configs/PATHS");
const getDB = require("../utils/getDB");

const existingActivity = async (req, res, next) => {
  const id = Number(req.params.id);
  const db = await getDB(ACTIVITIES_PATH);

  if (!db.some((activity) => activity.id === id) ) {
    return res.status(400).json({ message: 'Atividade não encontrado' }); // Ou já responde avisando que deu errado
  }
  next(); // Chama o próximo middleware
};

module.exports = existingActivity;
