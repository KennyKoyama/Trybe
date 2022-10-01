function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// Parte 1
// Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês
// de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os
// adicionar dentro da tag <ul>.
// Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente
// Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days'
const monthDaysList = document.querySelector('#days');
function createDaysOfMonth() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (const day of decemberDaysList) {
        let item = document.createElement('li');
        // Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day.
        // Ex: <li class="day">3</li>
        item.className = 'day';
        item.innerHTML = day;
        
        // Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe
        // holiday. Ex: <li class="day holiday">24</li>
        if(day == 24 || day == 25 || day == 31) item.className += ' holiday';

        // Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe
        // friday. Ex: <li class="day friday">4</li>
        if(day == 4 || day == 11 || day == 18 || day == 25) item.className += ' friday';
        monthDaysList.appendChild(item);
    };
};
createDaysOfMonth();


// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”.
const buttonsContainer = document.querySelector('.buttons-container');
function buttonHoliday() {
    const buttonHoliday = document.createElement('button');
    // Adicione a este botão a ID "btn-holiday"
    buttonHoliday.id = 'btn-holiday';

    // Sua função deve receber um parâmetro com a string 'Feriados'
    buttonHoliday.innerHTML = 'Feriados';

    // Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
    buttonsContainer.appendChild(buttonHoliday);
};
buttonHoliday();


// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
function colorHoliday() {
    const holidayList = document.querySelectorAll('.holiday');
    for (const holiday of holidayList) {
        if (holiday.style.backgroundColor != 'lightblue') {
            holiday.style.backgroundColor = 'lightblue';
            continue
        };

        // 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente,
        // ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
        holiday.style.backgroundColor = 'rgb(238,238,238)';
    };
};
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias
// que possuem a classe "holiday"
const holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click', colorHoliday);


// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira".

function buttonFriday() {
    const buttonFriday = document.createElement('button');
    // Adicione a esse botão o ID "btn-friday";
    buttonFriday.id = 'btn-friday';

    // Sua função deve receber como parâmetro a string “Sexta-feira”;
    buttonFriday.innerHTML = 'Sexta-feira';

    // Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
    buttonsContainer.appendChild(buttonFriday);
};
buttonFriday();


// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira.

const originalValues = [];
function textFriday() {
    const fridayList = document.querySelectorAll('.friday');
    let index = 0;
    for (const friday of fridayList) {
        if (!friday.classList.contains('fridayActive')) {
            friday.classList.toggle('fridayActive');
            originalValues.push(friday.innerHTML);
            friday.innerHTML = '#Sextou';
            continue
        };
        // 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado
        // novamente, ele retorna à configuração inicial exibindo os dias.
        friday.classList.toggle('fridayActive');
        friday.innerHTML = originalValues[index];
        index += 1;
    };
};


// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos
// dias que são sextas-feiras.
const fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click', textFriday);


// Parte 6
// Implemente duas funções que criem um efeito de “zoom”.
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve
// aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target.
monthDaysList.addEventListener('mouseover', zoomIn)
monthDaysList.addEventListener('mouseout', zoomOut)
function zoomIn(element) {
    if (element.target.localName == 'li') element.target.style.fontSize = '2rem';
};
function zoomOut(element) {
    if (element.target.localName == 'li') element.target.style.fontSize = '';
};


// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e
// criar dinamicamente um elemento com a tag <span> contendo a tarefa.
const myTasks = document.querySelector('.my-tasks');
function addMyTask(task) {
    const project = document.createElement('span');
    project.innerHTML = task;

    // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui
    // a classe "my-tasks".
    myTasks.appendChild(project);
};
addMyTask('Projeto: ');


// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa.
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente
// um elemento de tag <div> com a classe task
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada
function myTaskColor(color) {
    const newColor = document.createElement('div');
    newColor.className = 'task';
    newColor.style.backgroundColor = color;

    // O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui
    // a classe "my-tasks"
    myTasks.appendChild(newColor);
};
myTaskColor('green');


// Parte 9
// Implemente uma função que selecione uma tarefa.
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa,
// atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe
// task selected ela estará selecionada
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja,
// essa tarefa está deixando de ser uma tarefa selecionada.
let selectedColor;
myTasks.addEventListener('click' ,function (selected) {
    selectedColor = selected.target.style.backgroundColor;
    selected.target.classList.toggle('selected')
    console.log(selected.target.classList)
    console.log(selectedColor)
});
