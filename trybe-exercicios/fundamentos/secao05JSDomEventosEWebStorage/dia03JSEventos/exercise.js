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

function createDaysOfMonth() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                            17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
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
