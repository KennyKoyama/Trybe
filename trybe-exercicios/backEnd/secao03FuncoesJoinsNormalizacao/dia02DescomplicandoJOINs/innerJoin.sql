-- 1 Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou,
--  usando as tabelas actor e film_actor.
SELECT
	actor.actor_id,
	CONCAT(actor.first_name, ' ', actor.last_name) AS Full_Name,
  film.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor as film
ON actor.actor_id = film.actor_id;

-- 2 Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco.
--  Use as tabelas staff e address.ALTER
SELECT
	staff.first_name,
	staff.last_name,
  address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address as address
ON staff.address_id = address.address_id;

-- 3 Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em
--  ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora.
--  Essas informações podem ser encontradas nas tabelas customer e address.
SELECT
	customer.customer_id, customer.first_name, customer.email,
	address.address_id, address.address
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
ORDER BY customer.first_name DESC;

-- 4 Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito
--  da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas
--  tabelas address e customer.
SELECT
	customer.first_name, customer.email,
	address.address_id, address.address, address.district
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE customer.first_name LIKE '%rene%';

-- 5 Exiba o nome, o sobrenome e a quantidade de filmes alugados por cada cliente cadastrado.
--  Ordene seus resultados por nome e sobrenome de forma decrescente. Exiba somente os clientes
--  ativos. As informações podem ser encontradas nas tabelas customer e rental.
-- ⚠️ Dica: Utilize aliases para deixar suas queries mais descritivas e nomear as colunas da maneira que você quiser.
SELECT
	customer.first_name, customer.last_name,
  COUNT(rental.customer_id)
FROM sakila.customer AS customer
INNER JOIN sakila.rental AS rental
ON customer.customer_id = rental.customer_id
WHERE customer.active = 1
GROUP BY customer.first_name, customer.last_name
ORDER BY customer.first_name DESC, customer.last_name DESC;

-- 6 Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos
--  funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar
--  agrupados pelo nome e sobrenome do funcionário.
SELECT
	staff.first_name, staff.last_name,
  AVG(payment.amount) AS Avg_amount
FROM sakila.staff AS staff
INNER JOIN sakila.payment AS payment
ON staff.staff_id = payment.staff_id
GROUP BY staff.first_name, staff.last_name
ORDER BY staff.first_name, staff.last_name;

-- 7 Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as
--  tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT
	actor.actor_id, actor.first_name,
  film.film_id, film.title
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor AS film_actor
ON actor.actor_id = film_actor.actor_id
INNER JOIN sakila.film AS film
ON film.film_id = film_actor.film_id
ORDER BY actor.actor_id;
