// Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей, отличных от самого числа). 
// Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне. Проверьте работу функции в промежутке от 1 до 1000.

range1 = 1;                                             // Задаем начальное значение
range2 = 1000;                                          // Задаем конечное значение

function isPerfectly(num) {                             // функция, которая определяет, являются ли число совершенным

    let sum = getSum(getOwnDivisors(num));

    if (sum == num) {
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

function getSum(arr) {                                  // функция суммы элементов массива 

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

function getPerfectly(range1, range2) {                  // функция нахождения совершенных чисел на выделенном промежутке и помещение их в массив

    let arrFreindly = [];
    for (let i = range1; i <= range2; i++) {
        if (isPerfectly(i)) {
            arrFreindly.push(i);
        }
    }
    return arrFreindly;
}


console.log(getPerfectly(range1, range2));      // Вывод результата в консоль