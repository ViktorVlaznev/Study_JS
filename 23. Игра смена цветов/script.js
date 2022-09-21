//Массив цветов
let colors = ['red', 'green', 'blue'];
// функция получения случайного элемента массива
function arrColorsRandom(arr) {
    let random = Math.floor(Math.random() * (arr.length));
    return arr[random];
}
// создаем таблицу игрового поля
let rows = 3;
let cols = 3;
for (i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    field.appendChild(tr);
    for (j = 0; j < cols; j++) {
        let td = document.createElement('td');
        td.classList.add(arrColorsRandom(colors));
        tr.appendChild(td);
    }
}
let tds = document.querySelectorAll('td');
// функция получение следующего элемента массива
function arrNextElement(arr, num) {
    if (num == arr.length - 1) {
        return arr[0];
    } else return arr[num + 1];
}
let numberMoves = 0;
motion.innerHTML = 'Количество ходов: ' + numberMoves + '!';
// определение минимального количества ходов
let arrTdClass = [0, 0, 0];
for (let td of tds) {
    if (td.classList.contains('red')) {
        arrTdClass[0]++;
    } else if (td.classList.contains('blue')) {
        arrTdClass[2]++;
    } else arrTdClass[1]++;
}
let min = arrTdClass[(arrTdClass.indexOf(Math.max.apply(null, arrTdClass)) + 1) % 3] * 2 + arrTdClass[(arrTdClass.indexOf(Math.max.apply(null, arrTdClass)) + 2) % 3]
// событие при нажатии на ячеку смена цвета и определение победы
for (let td of tds) {
    td.addEventListener('click', () => {
        motion.innerHTML = 'Количество ходов: ' + ++numberMoves + '!';
        let num = colors.indexOf(td.getAttribute('class'));
        td.classList.remove(td.getAttribute('class'));
        td.classList.add(arrNextElement(colors, num));
        let flag = true;
        for (let td_1 of tds) {
            if (td.getAttribute('class') != td_1.getAttribute('class')) {
                flag = false;
            }
        }
        if (flag) {
            motion.innerHTML = 'Вы выйграли за ' + numberMoves + ' ходов. Минимальное количество ходов: ' + min + '!';
            numberMoves = 0;
            min = 0;
            alert('Победа!');
        }
    });
}