// "use strict";

// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.

let num1 = parseInt(prompt('Введите первое число: '));  // ввод первого числа
let num2 = parseInt(prompt('Введите второе число: '));  // ввод второго числа

function getGreatestCommonDivisor(num1, num2) {         // функция определения НОД

    return Math.max.apply(null, getInt(getOwnDivisors(num1), getOwnDivisors(num2)));
}

function getOwnDivisors(num) {                          // функция получения массива делителей числа

    let result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}
function getInt(arr1, arr2) {                           // функция, опрдеделяющая общие элементы двух массивов
    let result = [];

    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }

    return result;
}

function inArray(elem, arr) {                           // функция, которая определяет принадлежность элемента к массиву
    return arr.indexOf(elem) !== -1;
}
if (getGreatestCommonDivisor(num1, num2) == 1) {
    alert('Числа ' + num1 + ' и ' + num2 + ' взаимно простые!');
} else {
    alert('НОД чисел ' + num1 + ' и ' + num2 + ' равен ' + getGreatestCommonDivisor(num1, num2) + '!'); // вывод НОД
}