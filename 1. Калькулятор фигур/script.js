// подключаем модуль
let math = require('./math');
let main = require('./main');
// объявление переменных
let title = document.querySelector('title');
let circleLink = document.querySelector('#circle');
let rectangle = document.querySelector('#rectangle');
let square = document.querySelector('#square');
let triangle = document.querySelector('#triangle');
let figureLinks = document.querySelectorAll(' #mainpage a');
let heading = document.querySelector('header h1');
let calculation = document.querySelector('#calculation');
let result1 = document.querySelector('#result1');
let result2 = document.querySelector('#result2');
let result3 = document.querySelector('#result3');
let favicon = document.querySelector('#favicon');
// переменные для управлением округления
let roundingCircleLink = 2;
let roundingRectangle = 2;
let roundingSquare = 3;
let roundingTriangle = 2;
// событие при выборе круга
circleLink.addEventListener('click', function func() {
    favicon.href = 'favicon/faviconcircle.png';
    title.innerHTML = 'Круг';
    heading.innerHTML = 'Калькулятор круга';

    main.hidingElem(figureLinks, circleLink);

    main.createElementCalculate('p', calculation, 'textRadius');
    textRadius.innerHTML = 'Введите радиус: ';

    main.createElementCalculate('input', calculation, 'inputRadius');
    inputRadius.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.type = 'button';
    buttonCalculate.value = 'Рассчитать';

    buttonCalculate.addEventListener('click', function () {
        if (+inputRadius.value > 0) {
            result1.innerHTML = 'Площадь круга с радиусом ' + '"' + +inputRadius.value + '"' + ' = ' + math.squareCircle(inputRadius.value).toFixed(roundingCircleLink) + '.';
            result2.innerHTML = 'Длина круга с радиусом ' + '"' + +inputRadius.value + '"' + ' = ' + math.lineCircle(inputRadius.value).toFixed(roundingCircleLink) + '.';
            result3.innerHTML = 'Диаметр круга с радиусом ' + '"' + +inputRadius.value + '"' + ' = ' + 2 * inputRadius.value + '.';
        } else alert('Введён некорректный радиус.');
    });

    circleLink.removeEventListener('click', func);
});
// событие при выборе прямоугольника
rectangle.addEventListener('click', function func() {
    favicon.href = 'favicon/faviconrectangle.png';
    title.innerHTML = 'Прямоугольник';
    heading.innerHTML = 'Калькулятор прямоугольника';

    main.hidingElem(figureLinks, rectangle);

    main.createElementCalculate('p', calculation, 'textA');
    textA.innerHTML = 'Введите сторону a: ';

    main.createElementCalculate('input', calculation, 'inputA');
    inputA.type = 'number';

    main.createElementCalculate('p', calculation, 'textB');
    textB.innerHTML = 'Введите сторону b: ';

    main.createElementCalculate('input', calculation, 'inputB');
    inputB.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (+inputA.value > 0 && +inputB.value > 0) {
            result1.innerHTML = 'Площадь прямоугольника со сторонами ' + inputA.value + ' и ' + inputB.value + ' = ' + math.squareRectangle(inputA.value, inputB.value).toFixed(roundingRectangle) + '.';
            result2.innerHTML = 'Периметр прямоугольника со сторонами ' + inputA.value + ' и ' + inputB.value + ' = ' + math.lineRectangle(inputA.value, inputB.value).toFixed(roundingRectangle) + '.';
            result3.innerHTML = 'Диагональ прямоугольника со сторонами ' + inputA.value + ' и ' + inputB.value + ' = ' + math.pythagoreanTheorem(inputA.value, inputB.value).toFixed(roundingRectangle) + '.';
        } else alert('Введны некорректные стороны прямоугольника.');
    });

    rectangle.removeEventListener('click', func);
});
// событие при выборе квадрата
square.addEventListener('click', function func() {
    favicon.href = 'favicon/faviconsquare.png';
    title.innerHTML = 'Квадрат';
    heading.innerHTML = 'Калькулятор квадрата';

    main.hidingElem(figureLinks, square);

    main.createElementCalculate('p', calculation, 'textSquare');
    textSquare.innerHTML = 'Введите сторону квадрата: ';

    main.createElementCalculate('input', calculation, 'inputSquare');
    inputSquare.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (+inputSquare.value > 0) {
            result1.innerHTML = 'Площадь квадрата со стороной ' + '"' + inputSquare.value + '"' + ' = ' + math.squareRectangle(inputSquare.value).toFixed(roundingSquare) + '.';
            result2.innerHTML = 'Периметр квадрата со стороной ' + '"' + inputSquare.value + '"' + ' = ' + math.lineRectangle(inputSquare.value).toFixed(roundingSquare) + '.';
            result3.innerHTML = 'Диагональ квадрата со стороной ' + '"' + inputSquare.value + '"' + ' = ' + math.pythagoreanTheorem(inputSquare.value).toFixed(roundingSquare) + '.';
        } else alert('Введена некорректная сторона квадрата.')
    });

    square.removeEventListener('click', func);
});
// событие при выборе треугольника
triangle.addEventListener('click', function func() {
    favicon.href = 'favicon/favicontriangle.png';
    title.innerHTML = 'Треугольник';
    heading.innerHTML = 'Калькулятор треугольника';

    main.hidingElem(figureLinks, triangle);

    main.createElementCalculate('p', calculation, 'textA');
    textA.innerHTML = 'Введите сторону а: ';

    main.createElementCalculate('input', calculation, 'inputA');
    inputA.type = 'number';

    main.createElementCalculate('p', calculation, 'textB');
    textB.innerHTML = 'Введите сторону b: ';

    main.createElementCalculate('input', calculation, 'inputB');
    inputB.type = 'number';

    main.createElementCalculate('p', calculation, 'textC');
    textC.innerHTML = 'Введите сторону c: ';

    main.createElementCalculate('input', calculation, 'inputC');
    inputC.type = 'number';

    main.createElementCalculate('input', calculation, 'buttonCalculate');
    buttonCalculate.value = 'Рассчитать';
    buttonCalculate.type = 'button';

    buttonCalculate.addEventListener('click', function () {
        if (math.existenceTriangle(+inputA.value, +inputB.value, +inputC.value)) {
            result1.innerHTML = 'Площадь треугольника со сторонами ' + '"' + inputA.value + '" , ' + '"' + inputB.value + '"' + '" и ' + inputC.value + '"' + ' = ' + math.squareTriangle(inputA.value, inputB.value, inputC.value).toFixed(roundingTriangle) + '.';
            result2.innerHTML = 'Периметр треугольника со сторонами ' + '"' + inputA.value + '" , ' + '"' + inputB.value + '"' + '" и ' + inputC.value + '"' + ' = ' + math.perimeterTriangle(inputA.value, inputB.value, inputC.value).toFixed(roundingTriangle) + '.';
        } else alert('Треугольник с такими сторонами не существует!');
    });

    triangle.removeEventListener('click', func);
});