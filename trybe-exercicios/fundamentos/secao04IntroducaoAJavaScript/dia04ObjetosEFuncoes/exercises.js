// OBJECT EXERCISES

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Use a sintaxe meuObjeto.chave.
console.log('Bem vinda', info.personagem);


// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e,
// em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.
info['recorrente'] = 'Sim';
console.log(info);


// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for (const key in info) {
    console.log(key);
};


// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for (const key in info) {
    console.log(info[key]);
};


// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
// ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’.
// Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
console.log(info.recorrente === 'Sim' && info2.recorrente === 'Sim' ? 'Ambos recorrentes' : `${info.recorrente} e ${info2.recorrente}`);


// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um
// console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0]['titulo']}'`);

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um
// objeto contendo as seguintes informações:
leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

console.log(leitor.livrosFavoritos);


// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem
// <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);



// FUNCTIONS EXERCISES
// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindrome(word) {
    let reversed = word.toLowerCase()
                       .split('')
                       .reverse()
                       .join('');

    if (word === reversed) return true;
    return false
};
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function indexOfBiggest (arrayOfNumbers) {
    let biggest = Math.max(...arrayOfNumbers);
    let index = arrayOfNumbers.indexOf(biggest);
    console.log(index);
    return index;
};
console.log(indexOfBiggest([2, 3, 6, 7, 10, 1]));


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function indexOfSmallest (arrayOfNumbers) {
    let smallest = Math.min(...arrayOfNumbers);
    let index = arrayOfNumbers.indexOf(smallest);
    console.log(index);
    return index;
};
console.log(indexOfSmallest([2, 4, 6, 7, 10, 0, -3]));


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function findBiggestName(arrayOfNames) {
    let biggestName = '';
    for (const name of arrayOfNames) {
        if (name.length > biggestName.length) biggestName = name;
    }
    console.log(biggestName)
    return biggestName
}
console.log(findBiggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


