// подключаем модуль
let main = require('./main');
let keyboard = require('./keyboard');
// объявление переменных
let keybords = document.querySelector('#keyboard');
let textarea = document.querySelector('#textarea');
let buttonFunc14 = document.querySelector('#buttonFunc14');
let buttonFunc58 = document.querySelector('#buttonFunc58');
let buttonFunc912 = document.querySelector('#buttonFunc912');
let buttonFuncEnd = document.querySelector('#buttonFuncEnd');
let althanumericBlock1 = document.querySelector('#althanumericBlock1');
let althanumericBlock2 = document.querySelector('#althanumericBlock2');
let althanumericBlock3 = document.querySelector('#althanumericBlock3');
let althanumericBlock4 = document.querySelector('#althanumericBlock4');
let althanumericBlock5 = document.querySelector('#althanumericBlock5');
let controlpadBlock = document.querySelector('#controlpadBlock');
let arrowpadBlock1 = document.querySelector('#arrowpadBlock1');
let arrowpadBlock2 = document.querySelector('#arrowpadBlock2');
let numpadBlock1 = document.querySelector('#numpadBlock1');
let numpadBlock2 = document.querySelector('#numpadBlock2');
let numpadBlock3 = document.querySelector('#numpadBlock3');
let buttonEsc = document.querySelector('#esc');
let checkboxCapsLock = document.querySelector('#checkboxCapsLock');
let checkboxNumLock = document.querySelector('#checkboxNumLock');
// создание массивов
let arralthanumericBlock1 = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '='];
let arralthanumericBlock2 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'];
let arralthanumericBlock3 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
let arralthanumericBlock4 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];
let arralthanumericBlock5 = ['Control', 'Meta', 'Alt', 'Alt', 'Meta', 'Menu', 'Control'];
let arrControlpadBlock = ['Insert', 'Home', 'Page Up', 'Delete', 'End', 'Page Down'];
let arrarrowpadBlock = ['&#8593', '&#8592', '&#8595', '&#8594'];
let arrNumpadBlock = ['Num Lock', '/', '*', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', 'Del', '-', '+', 'Enter'];
// создаем фокус на тексте при использовании виртуальной клавиатурой
keybords.addEventListener('click', () => {
    document.getElementById("textarea").focus();
});
// создание функционального блока
buttonEsc.innerHTML = 'Esc';
buttonEsc.classList.add('button');
main.createTable(buttonFunc14, 1, 4);
let buttonFunc14Tds = document.querySelectorAll('#buttonFunc14 td');
let k = 0;
for (let td of buttonFunc14Tds) {
    td.innerHTML = 'F' + ++k;
    td.classList.add('button');
}
main.createTable(buttonFunc58, 1, 4);
let buttonFunc58Tds = document.querySelectorAll('#buttonFunc58 td');
k = 4;
for (let td of buttonFunc58Tds) {
    td.innerHTML = 'F' + ++k;
    td.classList.add('button');
}
main.createTable(buttonFunc912, 1, 4);
let buttonFunc912Tds = document.querySelectorAll('#buttonFunc912 td');
k = 8;
for (let td of buttonFunc912Tds) {
    td.innerHTML = 'F' + ++k;
    td.classList.add('button');
}
main.createTable(buttonFuncEnd, 1, 3);
let buttonFuncEndTds = document.querySelectorAll('#buttonFuncEnd td');
buttonFuncEndTds[0].innerHTML = 'Print Screen';
buttonFuncEndTds[1].innerHTML = 'Scroll Lock';
buttonFuncEndTds[2].innerHTML = 'Pause Break';
for (let td of buttonFuncEndTds) {
    td.classList.add('button');
}
// создание буквенно-цифрового блока
// нижний регистр
// ряд 1
main.createTable(althanumericBlock1, 1, 13);
let althanumericBlock1Tds = document.querySelectorAll('#althanumericBlock1 td');
k = 0;
for (let td of althanumericBlock1Tds) {
    td.innerHTML = arralthanumericBlock1[k++];
    td.classList.add('button');
    td.addEventListener('click', function () {
        keyboard.buttonTextNumberMain(td.innerHTML, textarea);
    });
}
main.createElementCalculate('div', althanumericBlock1, 'backspace');
backspace.classList.add('button');
backspace.innerHTML = 'Backspace';
backspace.addEventListener('click', () => {
    keyboard.buttonBackspace(textarea);
});
// ряд 2
main.createElementCalculate('div', althanumericBlock2, 'tab');
tab.classList.add('button');
tab.innerHTML = 'Tab';
tab.addEventListener('click', function () {
    keyboard.buttonTab(textarea);
});
main.createTable(althanumericBlock2, 1, 12);
let althanumericBlock2Tds = document.querySelectorAll('#althanumericBlock2 td');
k = 0;
for (let td of althanumericBlock2Tds) {
    td.innerHTML = arralthanumericBlock2[k++];
    td.classList.add('button');
    td.addEventListener('click', function () {
        if (checkboxCapsLock.checked != true) {
            keyboard.buttonTextNumberMain(td.innerHTML, textarea);
        } else keyboard.buttonTextNumberMain(td.innerHTML.toUpperCase(), textarea);
    });
}
main.createElementCalculate('div', althanumericBlock2, 'slash');
slash.innerHTML = '\\';
slash.classList.add('button');
slash.addEventListener('click', function () {
    keyboard.buttonTextNumberMain(slash.innerHTML, textarea);
});
// ряд 3
main.createElementCalculate('div', althanumericBlock3, 'capslock');
capslock.innerHTML = 'CapsLock';
capslock.classList.add('button');
// привязываем событие при нажатии на CapsLock
capslock.addEventListener('click', () => {
    if (checkboxCapsLock.checked != true) {
        checkboxCapsLock.checked = true;
    } else checkboxCapsLock.checked = false;
});
main.createTable(althanumericBlock3, 1, 11);
let althanumericBlock3Tds = document.querySelectorAll('#althanumericBlock3 td');
k = 0;
for (let td of althanumericBlock3Tds) {
    td.innerHTML = arralthanumericBlock3[k++];
    td.classList.add('button');
    td.addEventListener('click', function () {
        if (checkboxCapsLock.checked != true) {
            keyboard.buttonTextNumberMain(td.innerHTML, textarea);
        } else keyboard.buttonTextNumberMain(td.innerHTML.toUpperCase(), textarea);
    });
}
main.createElementCalculate('div', althanumericBlock3, 'enter');
enter.innerHTML = 'Enter';
enter.classList.add('button');
enter.addEventListener('click', function () {
    keyboard.buttonTextNumberMain('\n', textarea);
});
// ряд 4
main.createElementCalculate('div', althanumericBlock4, 'shiftleft');
shiftleft.innerHTML = 'Shift';
shiftleft.classList.add('button');
shiftleft.addEventListener('click', () => {
    // console.log(textarea.value);
});
main.createTable(althanumericBlock4, 1, 10);
let althanumericBlock4Tds = document.querySelectorAll('#althanumericBlock4 td');
k = 0;
for (let td of althanumericBlock4Tds) {
    td.innerHTML = arralthanumericBlock4[k++];
    td.classList.add('button');
    td.addEventListener('click', function () {
        if (checkboxCapsLock.checked != true) {
            keyboard.buttonTextNumberMain(td.innerHTML, textarea);
        } else keyboard.buttonTextNumberMain(td.innerHTML.toUpperCase(), textarea);
    });
}
main.createElementCalculate('div', althanumericBlock4, 'shiftright');
shiftright.innerHTML = 'Shift';
shiftright.classList.add('button');
// ряд 5
main.createTable(althanumericBlock5, 1, 3);
let althanumericBlock5Tds = document.querySelectorAll('#althanumericBlock5 td');
for (let i = 0; i < 3; i++) {
    althanumericBlock5Tds[i].innerHTML = arralthanumericBlock5[i];
    althanumericBlock5Tds[i].classList.add('button');
}
main.createElementCalculate('div', althanumericBlock5, 'buttonspace');
buttonspace.innerHTML = 'Space';
buttonspace.classList.add('button');
buttonspace.addEventListener('click', function () {
    keyboard.buttonTextNumberMain(' ', textarea);
});
main.createTable(althanumericBlock5, 1, 4);
let althanumericBlock51Tds = document.querySelectorAll('#althanumericBlock5 td');
for (let i = 3; i < 7; i++) {
    althanumericBlock51Tds[i].innerHTML = arralthanumericBlock5[i];
    althanumericBlock51Tds[i].classList.add('button');
}
// создание клавиш управления
main.createTable(controlpadBlock, 2, 3);
let controlpadBlockTds = document.querySelectorAll('#controlpadBlock td');
k = 0;
for (let td of controlpadBlockTds) {
    td.innerHTML = arrControlpadBlock[k++];
    td.classList.add('button');
}
// событие для клавиши Delete
controlpadBlockTds[3].addEventListener('click', () => {
    keyboard.buttonDel(textarea);
});
// событие для клавиши PageUp
controlpadBlockTds[2].addEventListener('click', () => {
    keyboard.buttonPageUp(textarea);
});
// событие для клавиши PageDown
controlpadBlockTds[5].addEventListener('click', () => {
    keyboard.buttonPageDown(textarea);
});
// событие для клавиши Home
controlpadBlockTds[1].addEventListener('click', () => {
    keyboard.buttonHome(textarea);
});
// событие для клавиши End
controlpadBlockTds[4].addEventListener('click', () => {
    keyboard.buttonEnd(textarea);
});
// создание клавиш со стрелками
main.createElementCalculate('div', arrowpadBlock1, 'buttonup');
buttonup.classList.add('button');
buttonup.innerHTML = '&#8593';
// вверх
buttonup.addEventListener('click', () => {
    keyboard.buttonArrowUp(textarea);
});
main.createTable(arrowpadBlock2, 1, 3);
let arrowpadBlock2Tds = document.querySelectorAll('#arrowpadBlock2 td');
k = 1;
for (let td of arrowpadBlock2Tds) {
    td.innerHTML = arrarrowpadBlock[k++];
    td.classList.add('button');
}
// вправо
arrowpadBlock2Tds[2].addEventListener('click', () => {
    keyboard.buttonArrowRight(textarea);
});
// влево
arrowpadBlock2Tds[0].addEventListener('click', () => {
    keyboard.buttonArrowLeft(textarea);
});
// вниз
arrowpadBlock2Tds[1].addEventListener('click', () => {
    keyboard.buttonArrowDown(textarea);
});
// создание клавиш цифрового блока
main.createTable(numpadBlock1, 4, 3);
let numpadBlock1Tds = document.querySelectorAll('#numpadBlock1 td');
k = 0;
for (let td of numpadBlock1Tds) {
    td.innerHTML = arrNumpadBlock[k++];
    td.classList.add('button');
    td.addEventListener('click', function () {
        if (checkboxNumLock.checked == true && td.innerHTML != 'Num Lock') {
            keyboard.buttonTextNumberMain(td.innerHTML, textarea);
        }
    });
}
numpadBlock1Tds[0].addEventListener('click', () => {
    if (checkboxNumLock.checked != true) {
        checkboxNumLock.checked = true;
    } else checkboxNumLock.checked = false;
});
main.createElementCalculate('div', numpadBlock2, 'buttonnull');
buttonnull.classList.add('button');
buttonnull.innerHTML = '0';
buttonnull.addEventListener('click', function () {
    if (checkboxNumLock.checked == true) {
        keyboard.buttonTextNumberMain(buttonnull.innerHTML, textarea);
    }
});
main.createElementCalculate('div', numpadBlock2, 'buttonpoint');
buttonpoint.innerHTML = '.';
buttonpoint.classList.add('button');
buttonpoint.addEventListener('click', function () {
    if (checkboxNumLock.checked == true) {
        keyboard.buttonTextNumberMain(buttonpoint.innerHTML, textarea);
    }
});
main.createElementCalculate('div', numpadBlock3, 'buttonminus');
buttonminus.classList.add('button');
buttonminus.innerHTML = '-';
buttonminus.addEventListener('click', function () {
    if (checkboxNumLock.checked == true) {
        keyboard.buttonTextNumberMain(buttonminus.innerHTML, textarea);
    }
});
main.createElementCalculate('div', numpadBlock3, 'buttonplus');
buttonplus.classList.add('button');
buttonplus.innerHTML = '+';
buttonplus.addEventListener('click', function () {
    if (checkboxNumLock.checked == true) {
        keyboard.buttonTextNumberMain(buttonplus.innerHTML, textarea);
    }
});
main.createElementCalculate('div', numpadBlock3, 'buttonenternum');
buttonenternum.classList.add('button');
buttonenternum.innerHTML = 'Enter';
buttonenternum.addEventListener('click', function () {
    if (checkboxNumLock.checked == true) {
        keyboard.buttonTextNumberMain('\n', textarea);
    }
});