const express = require('express');
const existingId = require('../middlewares/existingId');
const validateTeam = require('../middlewares/validateTeam');
const getTeams = require('../utils/getTeams');
const getTeamById = require('../utils/getTeamById');
const addTeam = require('../utils/addTeam');
const editTeam = require('../utils/editTeam');
const deleteTeam = require('../utils/deleteTeam');
const validateEditData = require('../middlewares/validateEditData');

const teamsRoutes = express();

teamsRoutes.get('/', async (_req, res) => {
  const teams = await getTeams();
  res.status(200).json( { teams } );
});

teamsRoutes.get('/:id', existingId, async (req, res) => {
  const { id } = req.params;
  const team = await getTeamById(id);
  res.status(200).json( { team } );
});

teamsRoutes.post('/', validateTeam, async (req, res) => {
  const newTeam = await addTeam(req.body);
  res.status(201).json( { newTeam } );
});

teamsRoutes.put('/:id', existingId, validateEditData, async (req, res) => {
  const { id } = req.params;
  const updatedTeam = await editTeam(id, req.body);
  res.status(201).json( { updatedTeam } );
});

teamsRoutes.delete('/:id', existingId, async (req, res) => {
  const { id } = req.params;
  const deletedTeam = await deleteTeam(id);
  console.log(deletedTeam)
  res.status(200).json( { deletedTeam } );
});

module.exports = teamsRoutes;
