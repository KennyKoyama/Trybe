const express = require('express');
const helmet = require('helmet');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');
const activitiesRoutes = require('./routes/activitiesRoutes');
const limiter = require('./configs/rateLimit.config');

app.use(limiter);
app.use(helmet())
app.use(express.json());
app.use(apiCredentials);

app.use('/activities', activitiesRoutes);

module.exports = app;