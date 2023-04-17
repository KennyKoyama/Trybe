const express = require('express');
const existingUser = require('../middlewares/existingUser');
const validateUser = require('../middlewares/validateUser');
const getDB = require('../utils/getDB');
const getBy = require('../utils/getByID');
const addContent = require('../utils/addContent');
const editContent = require('../utils/editContent');
const deleteContent = require('../utils/deleteContent');
const validateEditData = require('../middlewares/validateEditData');
const { USERS_PATH } = require('../configs/PATHS');
const generateToken = require('../utils/generateToken');

const usersRoutes = express.Router();

// GET ALL
usersRoutes.get('/', async (_req, res) => {
  const users = await getDB(USERS_PATH);
  res.status(200).json( { users } );
});

// GET SINGLE
usersRoutes.get('/:id', existingUser, async (req, res) => {
  const { id } = req.params;
  const user = await getBy(USERS_PATH, id);
  res.status(200).json( { user } );
});

// ADD
usersRoutes.post('/signup', validateUser, async (req, res) => {
  const { email, password, first_name, phone } = req.body;
  const token = generateToken();
  const newUser = {
    email,
    password,
    first_name,
    phone,
  };
  addContent(USERS_PATH, newUser);
  res.status(201).json( { "message": "User registered successfully!", token, newUser } );
});

// EDIT
usersRoutes.put('/:id', existingUser, validateEditData, async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const updatedUser = await editContent(USERS_PATH, id, newData);
  res.status(201).json( { updatedUser } );
});

// DELETE
usersRoutes.delete('/:id', existingUser, async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteContent(USERS_PATH, id);
  res.status(200).json( { deletedUser } );
});

module.exports = usersRoutes;
