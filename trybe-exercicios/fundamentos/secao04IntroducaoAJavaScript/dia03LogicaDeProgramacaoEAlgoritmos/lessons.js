// Utilizando o array abaixo, percorra-o somando todos os
// valores. Caso o valor final seja maior que 15, imprima-o.
// Caso seja igual ou menor que 15, imprima a mensagem:
// “valor menor que 16”

// Adicionar Array
let fruits = [3, 4, 10, 1, 12];


// Criar Variável com o valor 0
let sum = 0;


// Criar um loop que percorre o array
for (let index = 0; index < fruits.length; index += 1) {
    // Incrementar a variável com o valor correspondente a cada loop
    sum += fruits[index];
}


// Criar um if com a condição de a variável ser maior que 15
if(sum > 15) {
    // Caso a variável obedeça à condição
    // Imprimir a variável
    console.log(sum);
  } else {
    // Caso não obedeça à condição
    // Imprimir a mensagem “valor menor que 16”
    console.log('valor menor que 16');
  }



