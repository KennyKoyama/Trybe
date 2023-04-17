const express = require('express');
const existingActivity = require('../middlewares/existingActivity');
const validateActivity = require('../middlewares/validateActivity');
const getDB = require('../utils/getDB');
const getByID = require('../utils/getByID');
const addContent = require('../utils/addContent');
const editContent = require('../utils/editContent');
const deleteContent = require('../utils/deleteContent');
const validateEditData = require('../middlewares/validateEditData');
const { ACTIVITIES_PATH } = require('../configs/PATHS');

const activitiesRoutes = express.Router();

// GET ALL
activitiesRoutes.get('/', async (_req, res) => {
  const activities = await getDB(ACTIVITIES_PATH);
  res.status(200).json( { activities } );
});

// GET SINGLE
activitiesRoutes.get('/:id', existingActivity, async (req, res) => {
  const { id } = req.params;
  const activity = await getByID(ACTIVITIES_PATH, id);
  res.status(200).json( { activity } );
});

// ADD
activitiesRoutes.post('/', validateActivity, async (req, res) => {
  const { name, price, rating, difficulty } = req.body;
  const currDate = new Date();
  const newActivity = {
    name,
    price,
    description: {
      rating,
      difficulty,
      createdAt: `${currDate.getDate()}/${currDate.getMonth() + 1}/${currDate.getFullYear()}`,
    },
  };
  addContent(ACTIVITIES_PATH, newActivity);
  res.status(201).json( { "message": "Activity registered successfully!", newActivity } );
});

// EDIT
activitiesRoutes.put('/:id', existingActivity, validateEditData, async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const updatedActivity = await editContent(ACTIVITIES_PATH, id, newData);
  res.status(201).json( { updatedActivity } );
});

// DELETE
activitiesRoutes.delete('/:id', existingActivity, async (req, res) => {
  const { id } = req.params;
  const deletedActivity = await deleteContent(ACTIVITIES_PATH, id);
  res.status(200).json( { deletedActivity } );
});

module.exports = activitiesRoutes;
