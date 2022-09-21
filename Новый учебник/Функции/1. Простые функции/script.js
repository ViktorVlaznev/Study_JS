// "use strict";

function getDigitsSum(num) {                // функция, которая определяет сумму цифр
    let sum = 0;
    let str = String(num)
    for (let elem of str) {
        sum += Number(elem);
    }

    return sum;
}

function getDivisors(num) {                 // функция, которая создает массив делителей числа
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            arr.push(i);
        }
    }

    return arr;
}

function reverseStr(str) {                  // функция, которая переворачивает строку

    return str.split('').reverse().join('');

}
function delElem(arr, elem) {               // функция, которая удаляет заданный элемент массива

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
function arrPush(num) {                     // функция, которая заполняет массив целыми значениями от 1 до n
    let arr = [];
    for (let i = 1; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
function arrPush_1(num1, num2) {            // функция, которая заполняет массив целыми значениями от n1 до n2
    let arr = [];
    for (let i = num1; i <= num2; i++) {
        arr.push(i);
    }
    return arr;
}

// alert(getDigitsSum(101));
// console.log(getDivisors(175));
// console.log(reverseStr('qwertyu'));
// console.log(delElem([3, 'a', 2, 6, 4, 2, 8, 7, 2], 'a'));
// console.log(arrPush(7));
// console.log(arrPush_1(7, 20));
