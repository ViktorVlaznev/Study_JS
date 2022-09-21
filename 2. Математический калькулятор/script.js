// подключаем модуль
let math = require('./math');
let main = require('./main');
// объявление переменных
let title = document.querySelector('title');
let quadratic_equation = document.querySelector('#quadratic_equation');
let pythagorean = document.querySelector('#pythagorean');
let factorization = document.querySelector('#factorization');
let nod = document.querySelector('#nod');
let nok = document.querySelector('#nok');
let Links = document.querySelectorAll(' #mainpage a');
let heading = document.querySelector('header h1');
let calculation = document.querySelector('#calculation');
let result = document.querySelector('#result');
// кол-во цифр после запятой
let toFixedFraction = 4;
// событие при выборе калькулятора квадратного уравнения
quadratic_equation.addEventListener('click', function func() {
    favicon.href = 'favicon/favicon_quadratic_equation.png';
    title.innerHTML = 'Квадратное уравнение';
    heading.innerHTML = 'Калькулятор квадратного уравнения';

    main.hidingElem(Links, quadratic_equation);

    main.createElementCalculate('p', calculation, 'textA');
    textA.innerHTML = 'Введите а: ';

    main.createElementCalculate('input', calculation, 'inputA');
    inputA.type = 'number';

    main.createElementCalculate('p', calculation, 'textB');
    textB.innerHTML = 'Введите b: ';

    main.createElementCalculate('input', calculation, 'inputB');
    inputB.type = 'number';

    main.createElementCalculate('p', calculation, 'textC');
    textC.innerHTML = 'Введите c: ';

    main.createElementCalculate('input', calculation, 'inputC');
    inputC.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        let arrQuadraticEquation = math.arrQuadraticEquation(inputA.value, inputB.value, inputC.value);
        if (arrQuadraticEquation.length == 2) {
            result.innerHTML = 'Корнями квадратного уравнения являются Х1 = ' + arrQuadraticEquation[0].toFixed(toFixedFraction) + ' и Х2 = ' + arrQuadraticEquation[1].toFixed(toFixedFraction);
        } else if (arrQuadraticEquation.length == 1) {
            result.innerHTML = 'Корнем квадратного уравнения является Х = ' + arrQuadraticEquation[0].toFixed(toFixedFraction);
        } else result.innerHTML = 'Корней  нет.';
    });

    quadratic_equation.removeEventListener('click', func);
});
// событие при выборе калькулятора тройки Пифагора
pythagorean.addEventListener('click', function func() {
    favicon.href = 'favicon/favicontriangle.png';
    title.innerHTML = 'Тройка Пифагора';
    heading.innerHTML = 'Проверка чисел на тройку Пифагора';

    main.hidingElem(Links, pythagorean);

    main.createElementCalculate('p', calculation, 'textA');
    textA.innerHTML = 'Введите а: ';

    main.createElementCalculate('input', calculation, 'inputA');
    inputA.type = 'number';

    main.createElementCalculate('p', calculation, 'textB');
    textB.innerHTML = 'Введите b: ';

    main.createElementCalculate('input', calculation, 'inputB');
    inputB.type = 'number';

    main.createElementCalculate('p', calculation, 'textC');
    textC.innerHTML = 'Введите c: ';

    main.createElementCalculate('input', calculation, 'inputC');
    inputC.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (+inputA.value > 0 && +inputB.value > 0 && + inputC.value > 0 && math.pythagoreanTriple(inputA.value, inputB.value, inputC.value)) {
            result.innerHTML = 'Числа ' + inputA.value + ', ' + inputB.value + ' и ' + inputC.value + ' являются тройкой Пифагора.';
        } else result.innerHTML = 'Числа ' + inputA.value + ', ' + inputB.value + ' и ' + inputC.value + ' не являются тройкой Пифагора.';;
    });

    pythagorean.removeEventListener('click', func);
});
// событие при выборе калькулятора делителей числа
factorization.addEventListener('click', function func() {
    favicon.href = 'favicon/icons8-деление-2-80.png';
    title.innerHTML = 'Делители числа';
    heading.innerHTML = 'Калькулятор определения делителей числа';

    main.hidingElem(Links, factorization);

    main.createElementCalculate('p', calculation, 'textNumber');
    textNumber.innerHTML = 'Введите число: ';

    main.createElementCalculate('input', calculation, 'inputNumber');
    inputNumber.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (Number.isInteger(+inputNumber.value) && +inputNumber.value > 0) {
            let arr = math.getOwnDivisors(+inputNumber.value);
            result.innerHTML = 'Список делителей : ' + arr + '.';
        } else alert('Введено не целое число или неположительное число.');
    });

    factorization.removeEventListener('click', func);
});
// событие при выборе калькулятора для орпеделение общих делителей двух чисел и НОД
nod.addEventListener('click', function func() {
    favicon.href = 'favicon/icons8-деление-2-80.png';
    title.innerHTML = 'НОД';
    heading.innerHTML = 'Калькулятор делителей двух чисел и НОД';

    main.hidingElem(Links, nod);

    main.createElementCalculate('p', calculation, 'textA');
    textA.innerHTML = 'Введите первое число: ';

    main.createElementCalculate('input', calculation, 'inputA');
    inputA.type = 'number';

    main.createElementCalculate('p', calculation, 'textB');
    textB.innerHTML = 'Введите второе число: ';

    main.createElementCalculate('input', calculation, 'inputB');
    inputB.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (Number.isInteger(+inputA.value) && +inputA.value > 0 && Number.isInteger(+inputB.value) && +inputB.value > 0) {
            result.innerHTML = 'Общие делители чисел ' + '"' + inputA.value + '" и ' + inputB.value + '" являются ' + math.getCommonDivisor(math.getOwnDivisors(+inputA.value), math.getOwnDivisors(+inputB.value)) + '. НОД = ' + math.getGreatestCommonDivisor(+inputA.value, +inputB.value) + '.';
        } else alert('Введены некорректные числа.');
    });

    nod.removeEventListener('click', func);
});
// событие при выборе калькулятора для орпеделение НОК двух чисел
nok.addEventListener('click', function func() {
    favicon.href = 'favicon/icons8-деление-2-80.png';
    title.innerHTML = 'НОК';
    heading.innerHTML = 'Калькулятор для определения НОК двух чисел';

    main.hidingElem(Links, nok);

    main.createElementCalculate('p', calculation, 'textA');
    textA.innerHTML = 'Введите первое число: ';

    main.createElementCalculate('input', calculation, 'inputA');
    inputA.type = 'number';

    main.createElementCalculate('p', calculation, 'textB');
    textB.innerHTML = 'Введите второе число: ';

    main.createElementCalculate('input', calculation, 'inputB');
    inputB.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (Number.isInteger(+inputA.value) && +inputA.value > 0 && Number.isInteger(+inputB.value) && +inputB.value > 0) {
            result.innerHTML = 'НОК = ' + math.getSmallestCommonMultiple(+inputA.value, +inputB.value) + '.';
        } else alert('Введены некорректные числа.');
    });

    nok.removeEventListener('click', func);
});