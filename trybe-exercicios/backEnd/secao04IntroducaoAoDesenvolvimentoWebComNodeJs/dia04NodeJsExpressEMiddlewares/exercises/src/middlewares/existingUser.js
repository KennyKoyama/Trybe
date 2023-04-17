const { USERS_PATH } = require("../configs/PATHS");
const getDB = require("../utils/getDB");

const existingUser = async (req, res, next) => {
  const id = Number(req.params.id);
  const db = await getDB(USERS_PATH);

  if (!db.some((activity) => activity.id === id) ) {
    return res.status(400).json({ message: 'User not found' }); // Ou já responde avisando que deu errado
  }
  next(); // Chama o próximo middleware
};

module.exports = existingUser;
