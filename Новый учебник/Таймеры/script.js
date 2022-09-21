// Задача 1. Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.

let elem1 = document.querySelector('#elem1');                           // определяем кнопку
let par1 = document.querySelector('#par1');                             // определяем абзац

elem1.addEventListener('click', function func() {                       // привязываем обработчик событий при на жатии на кнопку
    setInterval(function () {                                           // запускаем таймер
        par1.innerHTML++;
    }, 1000);
    this.removeEventListener('click', func);                            // отвязываем обработчик
});

// Задача 2. Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.

let elem2 = document.querySelector('#elem2');                           // определяем кнопку
let par2 = document.querySelector('#par2');                             // определяем абзац

elem2.addEventListener('click', function func() {                       // привязываем обработчик событий при на жатии на кнопку
    let timerId = setInterval(function () {                             // запускаем таймер
        par2.innerHTML--;

        if (par2.innerHTML == 0) {
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', func);                           // отвязываем обработчик
});

// Задача 3. Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.

let input3 = document.querySelector('#input3');

setInterval(function () {                                               // запускаем таймер
    input3.value **= 2;
}, 1000);

// Задача 4. Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.

let input4 = document.querySelector('#input4');
let par4 = document.querySelector('#par4');

input4.addEventListener('blur', function () {                           // привязываем обработчик событий при потере фокуса
    par4.innerHTML = input4.value;
    let timerId = setInterval(function () {                             // запускаем таймер

        par4.innerHTML--;

        if (par4.innerHTML <= 0) {
            clearInterval(timerId);
        }
    }, 1000);

});


// Задача 5. Дан инпут, кнопка и абзац. В инпут вводится какое-то число. По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.

let input5 = document.querySelector('#input5');
let par5 = document.querySelector('#par5');
let elem5 = document.querySelector('#elem5');                           // определяем кнопку

elem5.addEventListener('click', function func5() {                      // привязываем обработчик событий при нажатии на кнопку
    par5.innerHTML = input5.value;
    let timerId = setInterval(function () {                             // запускаем таймер

        par5.innerHTML--;

        if (par5.innerHTML <= 0) {                                      // Условие остановки таймера
            clearInterval(timerId);
        }
    }, 1000);
    this.removeEventListener('click', func5);
});

// Задача 6. Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.

let par6 = document.querySelector('#par6');
let start6 = document.querySelector('#start6');
let stop6 = document.querySelector('#stop6');
let timerId6;
let funcPar6 = () => par6.innerHTML++;

start6.addEventListener('click', function func6() {
    timerId6 = setInterval(funcPar6, 1000);
    start6.disabled = true;

});

stop6.addEventListener('click', function func6_1() {
    clearInterval(timerId6);
    start6.disabled = false;
});

// Задача 7. Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.

let funcPar7 = function () {
    if (par7.style.color == "green") {
        par7.style.color = "red";
    } else par7.style.color = "green";
};

setInterval(funcPar7, 1000);

// Задача 8. Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце: 17:23:01.

setInterval(function () {
    let date = new Date();
    let hours = addZero(date.getHours());
    let minutes = addZero(date.getMinutes());
    let seconds = addZero(date.getSeconds());
    par8.innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000);

function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}