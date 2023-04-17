const validateEditData = (req, res, next) => {
  const { name, price, rating, difficulty } = req.body;
  if (!name && !price && !rating && !difficulty) return res.status(400).json({ message: 'Empty fields' });
  next();
};

module.exports = validateEditData;
