const validateEditData = (req, res, next) => {
  const { nome, sigla } = req.body;
  if (!nome && !sigla) return res.status(400).json({ message: 'Nenhum campo alterado' });
  next();
};

module.exports = validateEditData;
