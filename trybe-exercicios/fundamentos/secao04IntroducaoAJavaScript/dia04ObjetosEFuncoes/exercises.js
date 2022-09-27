let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};


// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// Use a sintaxe meuObjeto.chave. Valor esperado no console:
console.log('Bem vinda', info.personagem)


// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e,
// em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.
info['recorrente'] = 'Sim';
console.log(info)


