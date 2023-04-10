// 🚀 Exercício 3
// Crie um servidor Node.js utilizando o framework Express.
const express = require('express');
const app = express();
app.use(express.json());

// 🚀 Exercício 4
// Crie uma função de leitura do JSON com o modulo fs.
const fs = require('fs').promises;
async function readJSON() {
  try {
    const data = await fs.readFile('./src/movies.json');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

// 🚀 Exercício 5
// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  readJSON().then(movies => res.status(200).json(movies.find(movie => movie.id == id)));
})

// 🚀 Exercício 6
// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', (_req, res) => {
  readJSON().then(data => res.status(200).json(data));
})

module.exports = app;