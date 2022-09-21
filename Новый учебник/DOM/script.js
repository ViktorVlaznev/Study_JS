
// Задача 1. Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.

let input1 = document.querySelector('#input1');             // вводим переменную для инпута
let paragraph1 = document.querySelector('#paragraph1');     // вводим переменную для абзаца
let value1 = paragraph1.innerHTML;                          // первоначальное значение абзаца

input1.addEventListener('blur', function () {               // привязываем обработчик событий для потери фокуса инпута
    paragraph1.innerHTML = value1;
    paragraph1.innerHTML += input1.value;
    input1.value1 = "";
});

// Задача 2. Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.

let inputs2 = document.querySelectorAll(".input2");         // вводим переменную для инпутов
let button2 = document.querySelector("#button2");           // вводим переменную для кнопки сложения
let button2_1 = document.querySelector("#button2_1");         // вводим переменную для кнопки очистки значений
let paragraph2 = document.querySelector('#paragraph2');     // вводим переменную для абзаца
let value2 = paragraph2.innerHTML;                          // первоначальное значение абзаца

button2.addEventListener('click', function () {             // привязываем обработчик событий при нажатии на кнопку Сложить
    let sum = 0;
    paragraph2.innerHTML = value2;
    for (let elem of inputs2) {
        sum += Number(elem.value);
    }
    paragraph2.innerHTML += sum;
});

button2_1.addEventListener('click', function () {            // привязываем обработчик событий при нажатии на кнопку очистить
    for (let elem of inputs2) {
        elem.value = "";
    }
    paragraph2.innerHTML = value2;
});

// Задача 3. Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

let input3 = document.querySelector('#input3');             // вводим переменную для инпута
let paragraph3 = document.querySelector('#paragraph3');     // вводим переменную для абзаца
let value3 = paragraph3.innerHTML;                          // первоначальное значение абзаца

input3.addEventListener('blur', function () {               // привязываем обработчик событий для потери фокуса инпута
    let sum = 0;
    let arr = input3.value.split('');
    for (let elem of arr) {
        sum += Number(elem);
    }
    paragraph3.innerHTML = value3;
    paragraph3.innerHTML += input3.value + ' равна ' + sum + '.';
});

// Задача 4. Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

let input4 = document.querySelector('#input4');             // вводим переменную для инпута
let paragraph4 = document.querySelector('#paragraph4');     // вводим переменную для абзаца
let value4 = paragraph4.innerHTML;                          // первоначальное значение абзаца

input4.addEventListener('blur', function () {               // привязываем обработчик событий для потери фокуса инпута
    let arithMean = 0;
    let arr = input4.value.split(',');
    for (let elem of arr) {
        arithMean += Number(elem);
    }
    paragraph4.innerHTML = value4;
    paragraph4.innerHTML += '<b> равно </b>' + arithMean / arr.length + '.';
});

// Задача 5. Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.

let inputs51 = document.querySelectorAll(".input51");         // вводим переменную для инпутов
let input5 = document.querySelector("#input5");               // вводим переменную для первого инпута

input5.addEventListener('blur', function () {                 // привязываем обработчик событий для потери фокуса инпута

    let arr = input5.value.split(' ');
    for (let i = 0; i < inputs51.length; i++) {
        inputs51[i].value = arr[i];
    }

});

// Задача 6. Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

let input6 = document.querySelector("#input6");               // вводим переменную для инпута

input6.addEventListener('blur', function () {                 // привязываем обработчик событий для потери фокуса инпута

    let arr = input6.value.split(' ');                        // разделяем строку в массив
    let arr1 = [];
    for (let elem of arr) {
        arr1.push(firstUpperLetter(elem));                    // применяем функцию, которая делает первый символ заглавным
    }
    input6.value = arr1.join(' ');                            // получаем из массива строку и присваиваем значение её инпуту
});

function firstUpperLetter(str) {                              // функция, которая делает первый символ заглавным
    return str[0].toUpperCase() + str.substr(1);
};

// Задача 7. Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

let input7 = document.querySelector("#input7");               // вводим переменную для первого инпута
let paragraph7 = document.querySelector('#paragraph7');       // вводим переменную для абзаца
let value7 = paragraph7.innerHTML;                            // первоначальное значение абзаца

input7.addEventListener('blur', function () {                 // привязываем обработчик событий для потери фокуса инпута
    paragraph7.innerHTML = value7
    let arr = input7.value.split(" ");
    let num = 0;
    for (let elem of arr) {
        if (elem != "") {
            num++;
        }
    }
    paragraph7.innerHTML += num;

});

// Задача 8. Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

let input8 = document.querySelector("#input8");               // вводим переменную для первого инпута

input8.addEventListener('blur', function () {                 // привязываем обработчик событий для потери фокуса инпута

    let date = input8.value;
    input8.type = "text";
    input8.value = date;

});

input8.addEventListener('click', function () {                // привязываем обработчик событий при кликании на инпут для возвращения первоначального типа

    input8.type = "date";

});

// Задача 9. Дан инпут.В него вводится слово.По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково(например, мадам).

let input9 = document.querySelector("#input9");
let button9 = document.querySelector("#button9");
let paragraph9 = document.querySelector("#paragraph9");

button9.addEventListener('click', function () {                      // привязываем обработчик событий при кликании на кнопку

    if (input9.value == input9.value.split('').reverse().join('')) { // условие для проверки на палиндром
        paragraph9.innerHTML = 'Слово является палиндромом!'
    } else {
        paragraph9.innerHTML = 'Слово не является палиндромом!'
    }
});

// Задача 10. Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.

let input10 = document.querySelector("#input10");
let paragraph10 = document.querySelector("#paragraph10");

input10.addEventListener('blur', function () {
    for (let elem of input10.value.split('')) {
        if (elem == 3) {
            paragraph10.innerHTML = 'Есть!';
            break;
        } else paragraph10.innerHTML = 'Нет!';
    }
});

// Задача 11. Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.

let paragraph11 = document.querySelectorAll(".paragraph11");
let button11 = document.querySelector("#button11");
let value11 = [];

for (let elem of paragraph11) {                                     // заполняем массив первоначальных значений абзаца
    value11.push(elem.innerHTML);
};

button11.addEventListener('click', function () {                    // привязываем обработчик событий при кликании на кнопку

    for (let i = 0; i < paragraph11.length; i++) {
        paragraph11[i].innerHTML = value11[i];
        paragraph11[i].innerHTML += ' ' + Number(i + 1);
    }
});

// Задача 12. Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.

let link12 = document.querySelectorAll(".link12");
let button12 = document.querySelector("#button12");
let value12 = [];

for (let elem of link12) {                                     // заполняем массив первоначальных значений ссылок
    value12.push(elem.innerHTML);
};

button12.addEventListener('click', function () {                    // привязываем обработчик событий при кликании на кнопку

    for (let i = 0; i < link12.length; i++) {
        link12[i].innerHTML = value12[i];
        link12[i].innerHTML += ' (' + link12[i].href + ')';
    }
});

// Задача 13.  Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &#8658;).

let link13 = document.querySelectorAll(".link13");
let button13 = document.querySelector("#button13");
let values13 = [];

for (let elem of link13) {                                          // заполняем массив первоначальных значений ссылок
    values13.push(elem.innerHTML);
};

button13.addEventListener('click', function () {                    // привязываем обработчик событий при кликании на кнопку

    for (let i = 0; i < link13.length; i++) {
        link13[i].innerHTML = values13[i];
        if (link13[i].href.substr(0, 7) == "http://") {
            link13[i].innerHTML += "&#8658";
        }
    }
});

// Задача 14. Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.

let paragraph14 = document.querySelectorAll(".paragraph14");

for (let elem of paragraph14) {

    elem.addEventListener('click', function () {

        elem.innerHTML **= 2;

    });
}

// Задача 15. Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.

let date15 = document.querySelector("#date15");
let paragraph15 = document.querySelector("#paragraph15");
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

date15.addEventListener('blur', function () {

    paragraph15.innerHTML = week[new Date(date15.value).getDay() - 1];

});

// Задача 16. Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.

let input16 = document.querySelector("#input16");
let button16plus = document.querySelector("#button16plus");
let button16minus = document.querySelector("#button16minus");

button16plus.addEventListener('click', function () {                        // привязываем обработчик событий при кликании на кнопку

    input16.value++;

});

button16minus.addEventListener('click', function () {                       // привязываем обработчик событий при кликании на кнопку
    if (input16.value >= 1) {
        input16.value--;
    }
});

input16.addEventListener('blur', function () {                              // условие если введено уже отрицательное значение

    if (input16.value < 0) {
        input16.value = 0;
    }

});

// Задача 17. Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

let paragraph17 = document.querySelectorAll(".paragraph17");
let input17 = document.querySelector("#input17");

for (let elem of paragraph17) {
    elem.addEventListener('click', function () {
        input17.value++;
    })
}

input17.addEventListener('blur', function () {                              // обнуление значения, если введено что-либо

    input17.value = 0;

});

// Задача 18. На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста

let div18 = document.querySelectorAll(".div18");
let button18 = document.querySelector("#button18");
let value18 = [];
for (let elem of div18) {                                          // заполняем массив первоначальных значений ссылок
    value18.push(elem.innerHTML);
};

button18.addEventListener('click', function () {
    for (let i = 0; i < div18.length; i++) {
        if (div18[i].innerHTML == value18[i]) {
            div18[i].innerHTML = div18[i].innerHTML.substr(0, 11) + '...';
        } else div18[i].innerHTML = value18[i];
    }
});

// Задача 19. Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.

let input19 = document.querySelector("#input19");

input19.addEventListener('blur', function () {

    if (input19.value >= 1 && input19.value <= 100) {
        input19.style.background = 'green';
    } else input19.style.background = 'red';

});

// Задача 20. Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.

let input20 = document.querySelector("#input20");
let button20 = document.querySelector("#button20");
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

button20.addEventListener('click', function () {
    input20.value = '';
    for (let i = 0; i < 8; i++) {
        input20.value += characters[Math.floor(Math.random() * characters.length)];
    }

});

// Задача 21. Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.

let input21 = document.querySelector("#input21");
let button21 = document.querySelector("#button21");

button21.addEventListener('click', function () {

    input21.value = shuffle(input21.value.split('')).join('');
    // input21.value = input21.value.split('').sort(() => Math.random() - 0.5).join('');

});
// алгоритм Тасование Фишера — Йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i


        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Задача 22. Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.

let input22 = document.querySelector("#input22");
let button22 = document.querySelector("#button22");
let paragraph22 = document.querySelector("#paragraph22");

button22.addEventListener('click', function () {

    paragraph22.innerHTML = input22.value * 1.8 + 32;

});

// Задача 23. Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

let input23 = document.querySelector("#input23");
let button23 = document.querySelector("#button23");
let paragraph23 = document.querySelector("#paragraph23");

button23.addEventListener('click', function () {
    let factorial = 1;
    if (input23.value >= 0 && Number.isInteger(Number(input23.value)) == true) {
        for (let i = 1; i <= input23.value; i++) {
            factorial *= i;
        }
        paragraph23.innerHTML = factorial;
    } else paragraph23.innerHTML = 'Не существует!';
});

// Задача 24. Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.

let input24a = document.querySelector("#input24a");
let input24b = document.querySelector("#input24b");
let input24c = document.querySelector("#input24c");
let button24 = document.querySelector("#button24");
let paragraph24 = document.querySelector("#paragraph24");

button24.addEventListener('click', function () {
    let D = input24b.value ** 2 - (4 * input24a.value * input24c.value);
    if (D > 0) {
        let X1 = (- input24b.value + Math.sqrt(D, 2)) / 2;
        let X2 = (- input24b.value - Math.sqrt(D, 2)) / 2;
        paragraph24.innerHTML = "Корнями уравнения являются " + X1 + " и " + X2 + "!";
    } else if (D == 0) {
        let X = - input24b.value / 2;
        paragraph24.innerHTML = "Корнем уравнения является " + X + "!";
    } else paragraph24.innerHTML = "Корней нет!";

});
