// часто применяемые общие функции
// функция скрытия элементов из массива, кроме избранного
function hidingElem(arr, visible) {
    for (let elem of arr) {
        if (elem != visible) {
            elem.style.display = 'none';
        }
    }
}
// функция создания элемента
function createElementCalculate(child, parent, id) {
    let name = document.createElement(child);
    name.id = id;
    parent.appendChild(name);
}
// функция исчезновения кнопки при нажатии и появления противоположной
function buttonTwoHidden(button1, button2) {
    button1.style.display = 'none';
    button2.style.display = 'inline';
}
// функция создания таймера на убывания от заданнного числа до 0
function funcTimerStart() {
    timerId = setInterval(function () {
        if (timer.value > 0) {
            --timer.value;
        } else {
            alert('Время вышло!');
            clearInterval(timerId);
        }
    }, 1000);
}
// функция создания таблицы
function createTable(table, row, column) {
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < column; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
// функция нумерации ячеек таблицы 
function numberingCells(arr) {
    arr = document.querySelectorAll('td');
    let k = 1;
    for (let elem of arr) {
        elem.innerHTML = k++;
    }
}

module.exports = { numberingCells, createTable, buttonTwoHidden, funcTimerStart, hidingElem, createElementCalculate };