-- safe updates mode só vai permitir executar seus comandos de 
-- UPDATE ou DELETE caso eles incluam quais IDs devem ser modificados
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
SET SQL_SAFE_UPDATES = 0;

-- UPDATE nome_da_tabela
-- SET propriedade_a_ser_alterada = 'novo valor para coluna'
-- WHERE alguma_condicao; importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- Opção 1 - Incluindo a lista de condições fixas
-- UPDATE sakila.actor
-- SET first_name = 'JOE'
-- WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
-- UPDATE sakila.actor
-- SET first_name = (
-- 	CASE actor_id 
-- 		WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
-- 		WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
-- 		WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
-- 		ELSE first_name -- em todos os outros casos, mantém-se o first_name
-- END);

-- UPDATE nome_da_tabela
-- SET coluna1 = valor1, coluna2 = valor2
-- [WHERE condições]
-- [ORDER BY expressao [ ASC | DESC ]]
-- [LIMIT quantidade_resultados];


-- 1 Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome “JULIA” para “JULES”.
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- 2 Altere a linha da tabela categoria onde o valor da coluna x é igual “Sci-fi” para “Science Fiction”.
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

-- 3 Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que
-- possuem classificação “G”, “PG” ou “PG-13” e um custo de substituição maior que $20.
UPDATE sakila.film
SET rental_rate = 25
WHERE length > 100 
AND replacement_cost > 20
AND rating IN ('G' ,'PG', 'PG-13');

-- 4 Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel
-- dos filmes com duração acima de 100 minutos passará a ser de $20,00.
UPDATE sakila.film
SET rental_rate = (
	CASE
		WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
        ELSE rental_rate
	END
)
