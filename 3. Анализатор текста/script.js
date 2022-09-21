// подключаем модуль
let text = require('./text');
// объявление переменных
let textarea = document.querySelector('#textarea');
let buttonAnalis = document.querySelector('#buttonAnalis');
let woldCheckbox = document.querySelector('#woldCheckbox');
let charCheckbox1 = document.querySelector('#charCheckbox1');
let charCheckbox2 = document.querySelector('#charCheckbox2');
let percentCheckbox = document.querySelector('#percentCheckbox');
let result1 = document.querySelector('#result1');
let result2 = document.querySelector('#result2');
let result3 = document.querySelector('#result3');
let result4 = document.querySelector('#result4');
// кол-во цифр после запятой
let toFixedFraction = 2;
// событие при нажатии кнопки
buttonAnalis.addEventListener('click', function () {
    result1.innerHTML = '';
    result2.innerHTML = '';
    result3.innerHTML = '';
    result4.innerHTML = '';
    if (woldCheckbox.checked) {
        result1.innerHTML = 'Количество слов в тексте: ' + text.numberWordsText(textarea.value) + '.';
    }
    if (charCheckbox1.checked) {
        result2.innerHTML = 'Количество всех символов в тексте: ' + text.numberCharsText(textarea.value) + '.';
    }
    if (charCheckbox2.checked) {
        result3.innerHTML = 'Количество символов без пробелов в тексте: ' + text.numberCharsWithSpaceText(textarea.value) + '.';
    }
    if (percentCheckbox.checked) {
        result4.innerHTML = 'Процентное содержание символов в тексте: ' + '<br>';
        for (let char of new Set(textarea.value)) {
            result4.innerHTML += '"' + char + '" - ' + text.percentCharText(textarea.value, char).toFixed(toFixedFraction) + '%<br>';
        }
    }
});