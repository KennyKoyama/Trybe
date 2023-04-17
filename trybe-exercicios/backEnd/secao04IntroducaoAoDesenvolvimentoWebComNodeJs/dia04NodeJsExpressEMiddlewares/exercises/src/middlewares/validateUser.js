const { USERS_PATH } = require("../configs/PATHS");
const getDB = require("../utils/getDB");

const validateUser = async (req, res, next) => {
  const { email, password, first_name, phone } = req.body;
  const isValidEmail = () => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email); // create regex
  const isValidPhone = () => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone); // create regex
  const users = await getDB(USERS_PATH);
  if (!first_name) return res.status(400).json({ message: 'Name missing'});
  if (first_name.length < 4) return res.status(400).json({ message: 'Name must be at least 4 characters long'});
  if (!password) return res.status(400).json({ message: 'Password missing' });
  if (!email) return res.status(400).json({ message: 'Email missing' });
  if (!isValidEmail()) return res.status(400).json({ message: 'Invalid email' });
  if (!phone) return res.status(400).json({ message: 'Phone missing' });
  if (!isValidPhone()) return res.status(400).json({ message: 'Invalid phone number' });
  if (users.some((User) => User.name === name)) {
    return res.status(422).json({ message: 'User already exists'});
  }
  next();
};

module.exports = validateUser;
