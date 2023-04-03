-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary)
FROM hr.employees;

-- 2. 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT
	MAX(salary) AS Max_Salary,
	MIN(salary) AS Min_Salary,
  (MAX(salary) - MIN(salary)) AS Difference
FROM hr.employees;

-- 3. 🚀 Escreva uma query que exiba a média salarial de cada job_id, ordenando
--  pela média salarial em ordem decrescente.
SELECT job_id, AVG(salary) AS Avg_Salary
FROM hr.employees
GROUP BY job_id
ORDER BY Avg_Salary DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar
--  o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS Total
FROM hr.employees;

-- 5. 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor
--  salário, a soma de todos os salários e a média dos salários. Todos os valores
--  devem ser formatados para ter apenas duas casas decimais.
SELECT
	MAX(salary) AS Max_Salary,
  MIN(salary) AS Min_Salary,
  SUM(salary) AS Total,
  ROUND(AVG(salary), 2) AS Avg_Salary
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas
--  programadoras (it_prog).
SELECT COUNT(*) AS IT_Programmers
FROM hr.employees
WHERE job_id = 'it_prog';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar
--  o pagamento de cada profissão (job_id).
SELECT job_id, SUM(salary)
FROM hr.employees
GROUP BY job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente
--  a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas
--  programadoras (it_prog).
SELECT SUM(salary) AS Total_Programmers_Salary
FROM hr.employees
WHERE job_id = 'it_prog';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os
--  cargos, exceto das pessoas programadoras (it_prog).
SELECT job_id, ROUND(AVG(salary), 2) AS Avg_Salary
FROM hr.employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY Avg_Salary DESC;

-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de
--  todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT
	department_id,
  ROUND(AVG(salary), 2) AS Avg_Salary,
  COUNT(*) AS Employees
FROM hr.employees
GROUP BY department_id
HAVING Employees > 10
ORDER BY department_id DESC;

-- 11. 🚀 Escreva uma query que atualize a coluna phone_number, de modo que todos
--  os telefones iniciados por 515 agora devem iniciar com 777.
SET SQL_SAFE_UPDATES=0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, 515, 777)
WHERE phone_number LIKE '515%';

SET SQL_SAFE_UPDATES=1;

SELECT * FROM hr.employees;

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro
--  nome tenha oito ou mais caracteres.
SELECT *
FROM hr.employees
WHERE LENGTH(first_name) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id,
--  primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name, YEAR(hire_date)
FROM hr.employees;

-- 14. 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário:
--  id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name, DAY(hire_date)
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário:
--  id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT employee_id, first_name, MONTH(hire_date)
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(first_name)
FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os
--  funcionário contratados em julho de 1987.
SELECT last_name, hire_date
FROM hr.employees
WHERE YEAR(hire_date) = 1987 AND MONTH(hire_date) = 06
ORDER BY last_name, hire_date;

-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário:
--  nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT first_name, last_name, DATEDIFF(CURDATE(), hire_date)
FROM hr.employees;
