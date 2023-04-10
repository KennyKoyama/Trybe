-- 1 Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT Piece, Price 
FROM PiecesProviders.Provides
WHERE Provider="RBT";

-- 2 Escreva uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * 
FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 5;

-- 3 Escreva uma query para exibir o nome das empresas e o preço das quatro peças com os maiores preços, começando a lista a partir do 3º item.
SELECT Provider, Price
FROM PiecesProviders.Provides
ORDER BY Price DESC
LIMIT 4
OFFSET 2;

-- 4 Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
SELECT Code, Name, Price
FROM PiecesProviders.Pieces, PiecesProviders.Provides
WHERE PiecesProviders.Provides.Provider="HAL" AND PiecesProviders.Pieces.Code=Piece
ORDER BY Price DESC;

-- 5 Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT CONCAT(COUNT(*), ' empresas possuem a peça 1.')
FROM PiecesProviders.Provides
WHERE Piece="1";
