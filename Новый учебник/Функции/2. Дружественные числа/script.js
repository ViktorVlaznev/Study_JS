// "use strict";
// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать их в виде двухмерного массива вида следующего вида:

// [ [220, 284], [1184, 1210], [2620, 2924] ]
// С помощью созданной функции найдите все пары дружественных чисел на промежутке от 1 до 3000.

range1 = 1;                                             // Задаем начальное значение
range2 = 3000;                                          // Задаем конечное значение

function isFreindly(num1, num2) {                       // функция, которая определяет, являются ли числа дружественными

    let sum1 = getSum(getOwnDivisors(num1));
    let sum2 = getSum(getOwnDivisors(num2));

    if (sum1 == num2 && sum2 == num1) {
        return true;
    } else {
        return false;
    }

}

function getOwnDivisors(num) {                          // функция получения массива делителей числа

    let result = [];

    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }

    return result;

}

function getSum(arr) {                                  // функция суммы массива

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function getFreindly(range1, range2) {                  // функция нахождения пар дружественных чисел на выделенном промежутке и помещение их в массив

    let arrFreindly = [];
    // let k = 0;
    for (let i = range1; i <= range2; i++) {
        for (let j = range1; j <= range2; j++) {
            // arrFreindly[k] = [];
            if (i != j && isFreindly(i, j)) {
                // arrFreindly[k].push(i,j);
                arrFreindly.push(i);
                // k++;
            }
        }
    }
    // console.log(k);
    return arrFreindly;

}

function getTwoSizeArr(arr) {                           // функция создания двухмерного массива из одномерного
    let twoSizeArr = [];
    let k = 0;
    for (let i = 0; i < arr.length - 1; i = i + 2) {
        twoSizeArr[k] = [];
        twoSizeArr[k].push(arr[i], arr[i + 1]);
        k++;
    }

    return twoSizeArr;
}

console.log(getTwoSizeArr(getFreindly(range1, range2))); // Вывод результата в консоль