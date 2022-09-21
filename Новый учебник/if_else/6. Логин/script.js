"use strict";

// Задача: создать алгоритм входа в личный кабинет

let login = prompt('Введите логин:');         // ввод логина 
let password;                                 // переменная для пароля  

if (login == null) {                          // условие при нажатии на Esc 

    alert('Отменено');                        // вывод при нажатии на Esc

} else if (login != 'Админ') {                // условие неправильного логина

    alert('Я вас не знаю');                   // вывод при неправильном логине

} else {                                      // начало блока при правильном логине

    password = prompt('Введите пароль:');     // ввод пароля

    if (password == null) {                   // условие при нажатии на Esc

        alert('Отменено');                    // вывод при нажатии на Esc

    } else if (password != 'Я главный') {     // условие неправильного пароля

        alert('Неверный пароль');             // вывод при неправильном пароле

    } else {

        alert('Здравствуйте!');               // вывод при правильном пароле

    }
}