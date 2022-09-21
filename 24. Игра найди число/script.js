// функция принимает сылку на игровое поле и массив со случайными числами, и будет формировать ячейки таблицы, заполняя их числами из массива
function build(field, arr) {
    field.textContent = '';
    for (i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        field.appendChild(tr);
        for (j = 0; j < arr.length; j++) {
            let td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
    }
    return field.querySelectorAll('td');
}
// функция подготовки массива
function prepare(size) {
    let arr = [];

    arr = range(size * size);
    arr = shuffle(arr);
    arr = chunk(arr, size);

    return arr;
}
// функция формирует массив с числами от 1 до максимального числа таблицы
function range(count) {
    let arr = [];
    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
    return arr;
}
// функция перемешивает элементы массива в случайном порядке
function shuffle(arr) {
    let arrRandom = [];
    let k = arr.length;
    for (let i = 0; i < k; i++) {
        let numRandom = Math.floor(Math.random() * (arr.length));
        arrRandom.push(arr[numRandom]);
        arr.splice(numRandom, 1);
    }
    return arrRandom;
}
// функция разбивает одномерный массив в двухмерный
function chunk(arr, n) {
    let arrTwo = [];
    let k = 0;
    for (let i = 0; i < arr.length / n; i++) {
        arrTwo[i] = [];
        for (let j = 0; j < n; j++) {
            arrTwo[i].push(arr[k]);
            k++;
        }
    }
    return arrTwo;
}
// функция активации ячейки
function activate(cells, size) {
    let counter = 1;

    for (let cell of cells) {
        cell.addEventListener('click', function () {
            if (counter == this.innerHTML) {
                this.classList.add('active');
                if (counter == size * size) {
                    start(++size);
                }
                counter++;
            }
        });
    }
}
// функция старта игры
function start(size) {
    activate(build(field, prepare(size)), size);
}

let field = document.querySelector('#field');
start(2);