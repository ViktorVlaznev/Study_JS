// объявление переменных
let inputNumber = document.querySelector('#number');
let buttonCheck = document.querySelector('#check');
let textAnswer = document.querySelector('#answer');
let textHistory = document.querySelector('#history');
let buttonReset = document.querySelector('#reset');
let hiddenNumber = Math.floor(Math.random() * 100 + 1);
// вывод в консоль загаданного числа
console.log(hiddenNumber);
// событие при нажатии на кнопку проверить
buttonCheck.addEventListener('click', function () {
    if (inputNumber.value > 0 && inputNumber.value <= 100) {
        if (inputNumber.value > hiddenNumber) {
            textAnswer.innerHTML = 'введите число поменьше';
            textHistory.innerHTML += inputNumber.value + '><br>';
        } else if (inputNumber.value < hiddenNumber) {
            textAnswer.innerHTML = 'введите число побольше';
            textHistory.innerHTML += inputNumber.value + '<<br>';
        } else {
            alert('Урааа!!! Угадал!!! Это число ' + hiddenNumber);
            textHistory.innerHTML += inputNumber.value + ' Победа!!!' + '<br>';
        }
    } else alert('Введено число вне диапазона!');
});
// событие при на жатии на кнопку сброс
buttonReset.addEventListener('click', function () {
    hiddenNumber = Math.floor(Math.random() * 100 + 1);
    textHistory.innerHTML = 'История:' + '<br>';
    textAnswer.innerHTML = '';
    inputNumber.value = '';
    console.log(hiddenNumber);
})