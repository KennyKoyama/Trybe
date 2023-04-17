const express = require('express');
const helmet = require('helmet');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');
const activitiesRoutes = require('./routes/activitiesRoutes');
const limiter = require('./configs/rateLimit.config');
const usersRoutes = require('./routes/usersRoutes');

app.use(limiter);
app.use(helmet())
app.use(express.json());
app.use(apiCredentials);

app.use('/activities', activitiesRoutes);
app.use('/users', usersRoutes);

module.exports = app;