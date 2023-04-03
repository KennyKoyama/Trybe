-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales)
--  e internacionais (international_sales) de cada filme.
SELECT
	Movies.title,
  Box_Office.domestic_sales, Box_Office.international_sales
FROM pixar.movies AS Movies
INNER JOIN pixar.box_office AS Box_Office
ON Movies.id = Box_Office.movie_id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas
--  para cada filme que possui um número maior de vendas internacionais (international_sales)
--  do que vendas nacionais (domestic_sales).
SELECT
	Movies.title,
  Box_Office.domestic_sales, Box_Office.international_sales
FROM pixar.movies AS Movies
INNER JOIN pixar.box_office AS Box_Office
ON Movies.id = Box_Office.movie_id
WHERE Box_Office.international_sales > Box_Office.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua
--  avaliação (rating) em ordem decrescente.
SELECT
	Movies.title,
  Box_Office.rating
FROM pixar.movies AS Movies
INNER JOIN pixar.box_office AS Box_Office
ON Movies.id = Box_Office.movie_id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas,
--  mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão
--  em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	Theater.*,
  Movies.*
FROM pixar.theater AS Theater
LEFT JOIN pixar.movies AS Movies
ON Theater.id = Movies.theater_id
ORDER BY Theater.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes,
--  mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes
--  filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  Movies.*,
  Theater.*
FROM pixar.theater AS Theater
RIGHT JOIN pixar.movies AS Movies
ON Theater.id = Movies.theater_id
ORDER BY Theater.name;

-- 🚀 Exercício 6 BONUS: Utilizando o INNER JOIN, selecione todas as informações dos filmes que
--  estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT
  M.*
FROM pixar.movies AS M
INNER JOIN pixar.theater AS T
ON M.theater_id = T.id
INNER JOIN pixar.box_office AS B
ON B.movie_id = M.id
WHERE B.rating > 8;