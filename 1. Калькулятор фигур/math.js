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

module.exports = { squareCircle, lineCircle, squareRectangle, lineRectangle, perimeterTriangle, halfperimeterTriangle, squareTriangle, existenceTriangle, pythagoreanTheorem, arrQuadraticEquation, determinantQuadraticEquation };