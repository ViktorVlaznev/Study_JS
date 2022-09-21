// модуль функций для работы с текстом
// функция, возвращающая количество слов в тексте
function numberWordsText(str) {
    return str.match(/[^\s]+/g) ? str.match(/[^\s]+/g).length : 0;
}
// функция, возвращающая количество всех символов в тексте
function numberCharsText(str) {
    return str.split('') ? str.split('').length : 0;
}
// функция, возвращающая количество символов в тексте без пробелов
function numberCharsWithSpaceText(str) {
    return str.match(/\S/g) ? str.match(/\S/g).length : 0;
}
// функция, возвращающая процентное содержание символов в тексте
function percentCharText(str, char) {
    let k = 0;
    for (let elem of str) {
        elem == char ? k++ : k;
    }
    return (k / str.length) * 100;
}

module.exports = { percentCharText, numberWordsText, numberCharsText, numberCharsWithSpaceText };