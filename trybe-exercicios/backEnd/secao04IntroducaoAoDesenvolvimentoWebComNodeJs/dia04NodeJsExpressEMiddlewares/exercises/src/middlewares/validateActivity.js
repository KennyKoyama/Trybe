const { ACTIVITIES_PATH } = require("../configs/PATHS");
const getDB = require("../utils/getDB");

const validateActivity = async (req, res, next) => {
  const { name, price, rating, difficulty } = req.body;
  const activities = await getDB(ACTIVITIES_PATH);
  if (!name) return res.status(400).json({ message: 'Name missing'});
  if (name.length < 4) return res.status(400).json({ message: 'Name must be at least 4 characters long'});
  if (!price) return res.status(400).json({ message: 'Price missing' });
  if (price >= 0) return res.status(400).json({ message: 'price must be a number greater than or equal to zero' });
  if (!rating) return res.status(400).json({ message: 'Rating missing' });
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return res.status(400).json({ message: 'Rating must be an integer between 1 and 5' });
  if (!difficulty) return res.status(400).json({ message: 'Difficulty missing' });
  if (difficulty !== 'easy' || difficulty !== 'medium' || difficulty !== 'hard') return res.status(400).json({ message: 'Difficulty must be easy, medium or hard' });
  if (activities.some((activity) => activity.name === name)) {
    return res.status(422).json({ message: 'Activity already exists'});
  }
  next();
};

module.exports = validateActivity;
