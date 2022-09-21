// Модуль математических операций

// функция определения площади круга
function squareCircle(radius) {
    return Math.PI * radius ** 2;
}
// функция определения длины круга
function lineCircle(radius) {
    return 2 * Math.PI * radius;
}
// функция определения площади прямоугольника и квадрата
function squareRectangle(a, b = a) {
    return a * b;
}
// функция определения периметра прямоугольника и квадрата
function lineRectangle(a, b = a) {
    return 2 * (+a + +b);
}
// функция определения периметра треугольника
function perimeterTriangle(a, b, c) {
    return +a + +b + +c;
}
// функция определения полупериметра треугольника
function halfperimeterTriangle(a, b, c) {
    return perimeterTriangle(a, b, c) / 2;
}
// функция определения площади треугольника по трём сторонам (по формуле Герона)
function squareTriangle(a, b, c) {
    return Math.sqrt(halfperimeterTriangle(a, b, c) * (halfperimeterTriangle(a, b, c) - +a) * (halfperimeterTriangle(a, b, c) - +b) * (halfperimeterTriangle(a, b, c) - +c));
}
// функция проверка треугольника о существовании
function existenceTriangle(a, b, c) {
    if (((a + b) > c) && ((b + c) > a) && ((a + c) > b)) {
        return true;
    } else return false;
}
// функция вычисления гипотенузы по т.Пифагора
function pythagoreanTheorem(a, b = a) {
    return (Math.sqrt(a ** 2 + b ** 2));
}
// функция получения массива корней квадратного уравнения
function arrQuadraticEquation(a, b, c) {
    let arr = [];
    if (a == 0 && b == 0) {
        return arr;
    } else if (a == 0) {
        arr[0] = -c / b;
        return arr;
    } else if (determinantQuadraticEquation(a, b, c) > 0) {
        arr[0] = (-b + determinantQuadraticEquation(a, b, c)) / (2 * a);
        arr[1] = (-b - determinantQuadraticEquation(a, b, c)) / (2 * a);
        return arr;
    } else if (determinantQuadraticEquation(a, b, c) == 0) {
        arr[0] = -b / (2 * a);
        return arr;
    } else return arr;
}
// функция определения детерминанта квадратного уравнения
function determinantQuadraticEquation(a, b, c) {
    if ((b ** 2 - 4 * a * c) >= 0) {
        return Math.sqrt(b ** 2 - 4 * a * c);
    } else return -1;
}
// функция определения являются ли 3 числа Пифагоровыми
function pythagoreanTriple(a, b, c) {
    let sum = +a + +b + +c;
    return Math.max(a, b, c) ** 2 == (Math.min(a, b, c) ** 2 + (sum - Math.max(a, b, c) - Math.min(a, b, c)) ** 2);
}
// функция получения массива делителей числа 
function getOwnDivisors(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}
// функция определения НОД
function getGreatestCommonDivisor(num1, num2) {
    return Math.max.apply(null, getCommonDivisor(getOwnDivisors(num1), getOwnDivisors(num2)));
}
// функция, которая определяет принадлежность элемента к массиву
function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}
// функция, определяющая общие элементы двух массивов для определения общих делителей
function getCommonDivisor(arr1, arr2) {
    let result = [];
    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result;
}
function getSmallestCommonMultiple(a, b) {
    return a * b / getGreatestCommonDivisor(a, b);
}
// функция возвращает случайное значение в диапазоне от 1 до макс
function getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
}
// функция заполняет массив заданным кол-вом случайных неповторяющихся чисел из заданного диапазона
function getRandomArr(quantity, max) {
    let arr = [];
    while (arr.length != quantity) {
        let elem = getRandomNumber(max);
        if (!inArray(elem, arr)) {
            arr.push(elem);
        }
    }
    return arr;
}

module.exports = { inArray, getRandomArr, getRandomNumber, getSmallestCommonMultiple, getCommonDivisor, getGreatestCommonDivisor, getOwnDivisors, pythagoreanTriple, squareCircle, lineCircle, squareRectangle, lineRectangle, perimeterTriangle, halfperimeterTriangle, squareTriangle, existenceTriangle, pythagoreanTheorem, arrQuadraticEquation, determinantQuadraticEquation };