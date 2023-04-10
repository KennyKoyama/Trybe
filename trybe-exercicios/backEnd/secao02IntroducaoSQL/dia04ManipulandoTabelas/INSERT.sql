SELECT * FROM sakila.staff;

-- 1 Insira um novo funcionário na tabela sakila.staff
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, username, password)
VALUES('Kenny', 'Koyama', 550,'teste@teste.com', 1,'kennysk', 'senha123');

-- 2 Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, username, password)
VALUES
('Ken', 'Koy', 50,'teste@teste.com', 2,'kenk', 'senha123'),
('Ny', 'Ama', 5,'teste@teste.com', 1,'nysk', 'senha123');

-- 3 Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    LIMIT 5;

-- 4 Cadastre três categorias de uma vez só na tabela sakila.category
INSERT INTO sakila.category (name)
VALUES
('Teste1'),
('Teste2'),
('Teste3');

-- 5 Cadastre uma nova loja na tabela sakila.store
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES
(3, 3),
(4, 4),
(5, 5);
