// объявление переменных
let date = new Date();
let nameMonth = document.querySelector('#nameMonth');
let lastMonth = document.querySelector('#lastMonth');
let nextMonth = document.querySelector('#nextMonth');
let month = date.getMonth();
let listDaysMonth = document.querySelector('#listDaysMonth');
let lastDays = new Date(date.getFullYear(), date.getMonth() + 1, 0);   // определяем последний день месяца
// создадим массив с месяцами
let arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
// функция удаления группы тегов
function removeArr(arr) {
    for (let elem of arr) {
        elem.remove();
    }
}
// функция создания массива тегов 
function createArrTeg(length, teg, group, parent, now, condition = true) {
    for (let i = 0; i < length; i++) {
        let name = document.createElement(teg);
        name.classList.add(group);
        name.innerHTML = i + 1;
        parent.appendChild(name);
        if ((i == now) && (condition)) {
            name.style.backgroundColor = 'aqua';
        }
    }
}
// устанавливаем действующий месяц и год
nameMonth.innerHTML = arrMonth[date.getMonth()] + ' - ' + date.getFullYear();
// создаем список всех дней месяца
createArrTeg(lastDays.getDate(), 'li', 'days', listDaysMonth, date.getDate() - 1);
// вешаем событие при нажатии на ссылки
lastMonth.addEventListener('click', () => {
    let liesDay = document.querySelectorAll('li');
    removeArr(liesDay);
    let lastDate = new Date(date.getFullYear(), --month);
    nameMonth.innerHTML = arrMonth[lastDate.getMonth()] + ' - ' + lastDate.getFullYear();
    let lastDays = new Date(date.getFullYear(), lastDate.getMonth() + 1, 0);
    createArrTeg(lastDays.getDate(), 'li', 'days', listDaysMonth, date.getDate() - 1, lastDate.getMonth() == date.getMonth() && lastDate.getFullYear() == date.getFullYear());
});
nextMonth.addEventListener('click', () => {
    let liesDay = document.querySelectorAll('li');
    removeArr(liesDay);
    let nextDate = new Date(date.getFullYear(), ++month);
    nameMonth.innerHTML = arrMonth[nextDate.getMonth()] + ' - ' + nextDate.getFullYear();
    let lastDays = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0);
    createArrTeg(lastDays.getDate(), 'li', 'days', listDaysMonth, date.getDate() - 1, nextDate.getMonth() == date.getMonth() && nextDate.getFullYear() == date.getFullYear());
});