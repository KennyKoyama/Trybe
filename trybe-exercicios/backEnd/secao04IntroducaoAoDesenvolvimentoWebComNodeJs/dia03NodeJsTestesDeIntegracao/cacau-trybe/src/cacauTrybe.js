const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const updateCacauTrybeFile = async (newValues) => {
  const path = '/files/cacauTrybeFile.json';
  try {
    fs.writeFile(join(__dirname, path), JSON.stringify(newValues));
    return 'CacauTrybe file successfully updated';
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const getChocolatesByQuery = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.includes(query));
};

const getTotalChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  const totalChocolates = cacauTrybe.chocolates.length;
  const result = { totalChocolates };
  return result;
};

const updateChocolate = async (id, newValues) => {
  const cacauTrybe = await readCacauTrybeFile();
  const updatedList = cacauTrybe.chocolates.map((chocolate) => (
    chocolate.id === id
      ? { ...chocolate, ...newValues }
      : chocolate
  ));
  updateCacauTrybeFile({ ...cacauTrybe, chocolates: updatedList });

  return {
    "chocolate": {
      id,
      ...newValues,
    }
  };
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
  getChocolatesByQuery,
  updateChocolate,
};