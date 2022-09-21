// "use strict";
// Пусть нам нужно вывести на экран все возможные счастливые автобусные билеты. 
// Билет называется счастливым, если сумма первых трех цифр билета равна сумме вторых трех цифр 
// (будем рассматривать билеты, с любым кол-вом цифр).

function getLuckyTickets(digitsAmount) {                        // функция, формирующая массив счастливых билетов
    let result = [];

    let first = getFirst(digitsAmount);
    let last = getLast(digitsAmount);

    for (let i = first; i <= last; i++) {
        let ticketNum = normalizeNum(i, digitsAmount);

        if (isLucky(ticketNum)) {
            result.push(ticketNum);
        }
    }

    return result;
}

function isLucky(str) {                                         // функция, определяющая является ли число счастливым
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < str.length / 2; i++) {
        sum1 += Number(str[i]);
    }
    for (let j = str.length / 2; j < str.length; j++) {
        sum2 += Number(str[j]);
    }

    return sum1 == sum2;
}


function normalizeNum(num, digitsAmount) {                      // функция, добавляющая 0 спереди, если длина числа меньше заявленного
    let str = String(num);

    return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {                                // функция, заполняющая символами строку
    let str = '';
    for (let i = 1; i <= length; i++) {
        str += data;
    }
    return str;
}

function getLast(num) {                                         // функция, определяет до какого значения производить поиск 
    let str = '';
    let i = 1;
    while (i <= num) {
        str += '9';
        i++
    }
    return Number(str);
}

function getFirst(num) {                                        // функция, определяет с какого значения начинать поиск 
    let str = '1';
    let i = 2;
    while (i <= num - 1) {
        str += '0';
        i++
    }
    str += '1';
    return Number(str);
}
console.log(getLuckyTickets(2));
console.log(getLuckyTickets(4));
console.log(getLuckyTickets(6));
