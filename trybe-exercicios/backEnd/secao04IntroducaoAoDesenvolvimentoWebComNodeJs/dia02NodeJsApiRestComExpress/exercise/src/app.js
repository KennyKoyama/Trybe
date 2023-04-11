// 🚀 Exercício 3
// Crie um servidor Node.js utilizando o framework Express.
const fs = require('fs').promises;
const express = require('express');
const app = express();
app.use(express.json());

// 🚀 Exercício 4
// Crie uma função de leitura do JSON com o modulo fs.
async function readJSON() {
  try {
    const data = await fs.readFile('./src/movies.json');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  };
};

// 🚀 Exercício 5
// Crie um endpoint do tipo GET com a rota /movies/:id, que possa listar um filme do JSON por id.
app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  readJSON()
    .then(movies => res.status(200).json(movies.find(movie => movie.id == id)))
    .catch(err => console.log(err.message));
})

// 🚀 Exercício 6
// Crie um endpoint do tipo GET com a rota /movies, que possa listar todos os filmes do JSON.
app.get('/movies', (_req, res) => {
  readJSON()
    .then(data => res.status(200).json(data))
    .catch(err => console.log(err.message));
})

// 🚀 Exercício 7
// Crie um endpoint do tipo POST com a rota /movies, para cadastrar um novo filme no JSON.
app.post('/movies', (req, res) => {
  readJSON()
    .then(data => {
      const lastID = data[data.length - 1].id;
      const newMovie = { id: lastID + 1, ...req.body };
      const updatedMovies = [...data, newMovie];
      fs.writeFile('./src/movies.json', JSON.stringify(updatedMovies), (err) => {
        if (err) throw err;
        console.log('Movie successfully added');
      });
      res.status(201).json({ movie: newMovie });
    })
    .catch(err => console.log(err.message));
});

// 🚀 Exercício 8
// Crie um endpoint do tipo PUT com a rota / movies /: id, que possa editar informações de um filme do JSON.
app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  readJSON()
    .then(movies => {
      const selectedMovie = movies.find(movie => movie.id == id);
      if (!selectedMovie) {
        res.status(404).json({ message: 'Movie not found' });
      }
      const updatedMovie = { ...selectedMovie, ...req.body };
      res.status(200).json({ updatedMovie });
      const updatedMovies = movies.map(movie => movie.id == id ? updatedMovie : movie) ;
      fs.writeFile('./src/movies.json', JSON.stringify(updatedMovies), (err) => {
        if (err) throw err;
        console.log('Movie successfully updated');
      });
    })
    .catch(err => console.log(err.message));
});

// 🚀 Exercício 9
// Crie um endpoint do tipo DELETE com a rota /movies/:id que possa deletar um filme do JSON.
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  readJSON()
    .then(movies => {
      const movieIndex = movies.findIndex((movie) => movie.id == id);
      if (movieIndex < 0) return res.status(404).send('Movie not found!');
      movies.splice(movieIndex, 1);
      fs.writeFile('./src/movies.json', JSON.stringify(movies), (err) => {
        if (err) throw err;
        console.log('Movie successfully deleted');
      });
      res.status(200).end();
    })
    .catch(err => console.log(err.message));
});

module.exports = app;