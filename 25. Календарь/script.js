let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let info = calendar.querySelector('.info');


let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);

// функцию, которая параметром будет принимать целое число и создавать массив чисел от 1 до этого числа
function range(count) {
    let arr = [];
    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
    return arr;
}
// функция возвращаtn номер последнего дня месяца
function getLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
// функцию, которая будет получать номер дня недели первого дня месяца
function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 1);
    let num = date.getDay();

    if (num == 0) {
        return 6;
    } else {
        return num - 1;
    }
}
// И аналогичную функцию для последнего дня месяца:
function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num = date.getDay();

    if (num == 0) {
        return 6;
    } else {
        return num - 1;
    }
}
// функция, первым параметром принимающая массив, вторым - сколько пустых строк добавить слева, а третьим - сколько пустых строк справа
function normalize(arr, left, right) {
    for (let i = 0; i < left; i++) {
        arr.unshift('');
    }
    for (var i = 0; i < 6 - right; i++) {
        arr.push('');
    }

    return arr;

}
// функция разбивает одномерный массив в двухмерный
function chunk(arr, n) {
    let result = [];
    let count = Math.ceil(arr.length / n);

    for (let i = 0; i < count; i++) {
        let elems = arr.splice(0, n);
        result.push(elems);
    }

    return result;
}
// функция создания таблицы первым параметром принимающую ссылку на родительский элемент чисел календаря, а вторым - двухмерный массив
function createTable(parent, arr) {
    parent.textContent = '';
    for (i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr');
        parent.appendChild(tr);
        for (j = 0; j < 7; j++) {
            let td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
    }
}
// функция формирования календаря
function draw(body, year, month) {
    let arr = range(getLastDay(year, month));
    let firstWeekDay = getFirstWeekDay(year, month);
    let lastWeekDay = getLastWeekDay(year, month);

    let nums = chunk(normalize(arr, firstWeekDay, lastWeekDay), 7);
    showInfo(year, month, info);
    createTable(body, nums);

}
// Заполняем месяц и год над таблицей
function showInfo(year, month, elem) {
    elem.innerHTML = getMonthName(month) + ' ' + year;
}
function getMonthName(num) {
    var monthes = [
        'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ];

    return monthes[num % 12];
}
// стрелки для смены месяца
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
function getNextYear(year, month) {
    if (month == 11) {
        return year + 1;
    } else return year;
}
function getNextMonth(month) {
    if (month == 11) {
        month = 0
        return month;
    } else return month + 1;
}
function getPrevYear(year, month) {
    if (month == 0) {
        return year - 1;
    } else return year;
}
function getPrevMonth(month) {
    if (month == 0) {
        return 11;
    } else return month - 1;
}
next.addEventListener('click', function () {
    year = getNextYear(year, month);
    month = getNextMonth(month);
    draw(body, year, month);
    console.log(month);
});
prev.addEventListener('click', function () {
    year = getPrevYear(year, month);
    month = getPrevMonth(month);

    draw(body, year, month);
    console.log(month);
});