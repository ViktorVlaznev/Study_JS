// массив предсказаний
let predictions = [{
    'у вас сегодня будет замечательный день': 1
}, {
    'сегодня лучше не выходите из дома': 0
}, {
    'сегодня вас ждет удача и успех во всех начинаниях': 1
}, {
    'сегодня вас ждет успех при изучении JavaScript': 1
}, {
    'сегодня лучше полежите весь день на диване': 1
}, {
    'сегодня вы рискуете что-нибудь забыть при выходе из дома': 0
}, {
    'устройте сегодня себе выходной - пусть весь мир подождет': 1
}, {
    'сегодня ждут финансовые потери': 0
}, {
    'возможны проблемы со здоровьем': 0
}];
let timer = document.querySelector('#timer');
let text = document.querySelector('#text');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let random;
let timerId;
// событие при на жатии на кнопку старт
start.addEventListener('click', function () {
    this.classList.remove('active');
    stop.classList.add('active');

    timerId = setInterval(function () {
        timer.innerHTML = random = getRandomInt(1, predictions.length);
    }, 100);
});
// событие при на жатии на кнопку стоп
stop.addEventListener('click', function () {
    this.classList.remove('active');
    clearInterval(timerId);
    for (let key in predictions[random - 1]) {
        text.innerHTML = key;
        if (predictions[random - 1][key] == 0) {
            text.style.color = 'red';
        } else text.style.color = 'green';
    }
});
// функция получения случайного значения в диапазоне от мин до макс
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}