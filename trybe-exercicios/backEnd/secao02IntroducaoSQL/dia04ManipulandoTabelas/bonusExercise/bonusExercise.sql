-- Exercício 8: Altere a classificação da tabela box_office para 9.0 de todos os filmes
-- que lucraram mais de 400 milhões no mercado interno.
UPDATE pixar.box_office
SET rating = 9.0
WHERE domestic_sales > 400000000;

SELECT * FROM pixar.box_office;
-- Exercício 9: Altere a classificação da tabela box_office para 6.0 de todos os filmes
-- que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.
UPDATE pixar.box_office
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

SELECT * FROM pixar.box_office;

-- Exercício 10: Exclua da tabela movies todos os filmes com menos de 100 minutos de duração.
DELETE FROM pixar.box_office
WHERE movie_id IN (SELECT id FROM pixar.movies WHERE length_minutes < 100);

DELETE FROM pixar.movies
WHERE length_minutes < 100;
