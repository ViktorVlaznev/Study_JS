// подключаем модуль
let main = require('./main');
let math = require('./math');
// объявление переменных
let activetable = document.querySelector('#activetable');
let noactivetable = document.querySelector('#noactivetable');
let numberMoves = document.querySelector('#numbermoves');
let buttonStart = document.querySelector('#buttonStart');
let buttonPause = document.querySelector('#buttonPause');
let buttonReset = document.querySelector('#buttonReset');
let timer = document.querySelector('#timer');
let timerId;
let initialValue = timer.value;
// начальные условия
let row = 10;
let column = 10;
let quantityHidden = 10;
let number = 0;
numberMoves.innerHTML = 'Ход: ' + number + '.';
// функция таймер обратного отсчёта до 0
function funcTimerStart() {
    timerId = setInterval(function () {
        if (timer.value > 0) {
            --timer.value;
        } else {
            alert('Время вышло!');
            clearInterval(timerId);
            for (let tdactive of tdsactive) {
                tdactive.style.backgroundColor = '';
            }
            arrHidden = math.getRandomArr(quantityHidden, tdsactive.length);
            console.log(arrHidden);
            number = 0;
            timer.value = initialValue;
            numberMoves.innerHTML = 'Ход: ' + 0 + '. Осталось найти ' + arrHidden.length + ' ячеек.';
            buttonPause.style.display = 'none';
        }
    }, 1000);
}
// функция попеременного включения кнопок
function buttonTwoHidden(button1, button2) {
    button1.style.display = 'none';
    button2.style.display = 'inline';
}
// функция при нажатии на кнопку старт
function funcStart() {
    buttonTwoHidden(buttonStart, buttonPause);
    funcTimerStart();
    activetable.style.display = 'initial';
    noactivetable.style.display = 'none';
    this.removeEventListener('click', funcStart);
}
// функция при нажатии на кнопку пауза
function funcPause() {
    buttonTwoHidden(buttonPause, buttonStart);
    activetable.style.display = 'none';
    noactivetable.style.display = 'initial';
    clearInterval(timerId);
    buttonStart.addEventListener('click', funcStart);
}
// событие при нажатии на кнопку старт
buttonStart.addEventListener('click', funcStart);
// событие при нажатии на кнопку пауза
buttonPause.addEventListener('click', funcPause);
// событие при нажатии на кнопку сброс
buttonReset.addEventListener('click', function () {
    for (let tdactive of tdsactive) {
        tdactive.style.backgroundColor = '';
    }
    arrHidden = math.getRandomArr(quantityHidden, tdsactive.length);
    console.log(arrHidden);
    number = 0;
    timer.value = initialValue;
    numberMoves.innerHTML = 'Ход: ' + 0 + '. Осталось найти ' + arrHidden.length + ' ячеек.';
    funcPause();
});
// создаем активную таблицу
main.createTable(activetable, row, column);
let tdsactive = activetable.querySelectorAll('td');
// нумеруем ячеёки
main.numberingCells(tdsactive);
// создаем массив из загаданных ячеек
let arrHidden = math.getRandomArr(quantityHidden, tdsactive.length);
// создаем цикл по ячейкам с проверкой на нажатой ячейке
for (let tdactive of tdsactive) {
    tdactive.addEventListener('click', function () {
        if (math.inArray(+tdactive.innerHTML, arrHidden)) {
            tdactive.style.backgroundColor = 'aqua';
            arrHidden.splice(arrHidden.indexOf(+tdactive.innerHTML), 1);
            if (arrHidden.length == 0) {
                alert('Вы победили!!!');
                clearInterval(timerId);
                buttonPause.style.display = 'none';
            }
        }
        numberMoves.innerHTML = 'Ход: ' + ++number + '. Осталось найти ' + arrHidden.length + ' ячеек.';
    });
}
// создаем неактивную таблицу при паузе
main.createTable(noactivetable, row, column);
activetable.style.display = 'none';
console.log(arrHidden);