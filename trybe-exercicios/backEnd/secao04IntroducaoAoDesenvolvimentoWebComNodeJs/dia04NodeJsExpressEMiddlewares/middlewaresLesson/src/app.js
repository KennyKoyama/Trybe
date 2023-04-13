const express = require('express');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
require('express-async-errors');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');
const teamsRoutes = require('./routes/teamsRoutes');

// Configuramos um limitador para uma taxa máxima de 100 requisições em um intervalo de 15 minutos
const limiter = rateLimit({
   max: 100, // número máximo de requisições
   windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
   message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
});

app.use(limiter);
app.use(helmet())
app.use(express.json());
app.use(apiCredentials);

app.use('/teams', teamsRoutes);

module.exports = app;