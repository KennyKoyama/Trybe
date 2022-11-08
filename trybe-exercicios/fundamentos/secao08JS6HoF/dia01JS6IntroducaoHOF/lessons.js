// Crie uma função que retorne a string 'Acordando!!';
const wakeUp = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const breakfast = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const sleepTime = () => 'Partiu dormir!!';

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima
// no console o resultado da execução das funções que você criou nos exemplos anteriores
const doingThings = (tasks) => console.log(tasks());

// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

doingThings(breakfast);

doingThings(sleepTime);