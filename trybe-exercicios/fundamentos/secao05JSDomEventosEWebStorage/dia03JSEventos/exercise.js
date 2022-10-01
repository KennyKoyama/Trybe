function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
}
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
//   Parte 1

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
        console.log(item)
        monthDaysList.appendChild(item);

    }
}
createDaysOfMonth()



