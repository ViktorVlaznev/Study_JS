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


module.exports = { numberingCells, createTable, hidingElem, createElementCalculate };