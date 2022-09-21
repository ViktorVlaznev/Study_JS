// обявляем переменные
let test1 = document.querySelector('#test1');
let answers1 = test1.querySelectorAll('input');
let buttonCheck1 = document.querySelector('#buttonCheck1');
let test2 = document.querySelector('#test2');
let answers2 = test2.querySelectorAll('input');
let buttonCheck2 = document.querySelector('#buttonCheck2');
let test3 = document.querySelector('#test3');
let buttonCheck3 = document.querySelector('#buttonCheck3');
let test4 = document.querySelector('#test4');
let buttonCheck4 = document.querySelector('#buttonCheck4');
let test4_2 = document.querySelector('#test4_2');
let buttonCheck4_2 = document.querySelector('#buttonCheck4_2');
let test5 = document.querySelector('#test5');
let answers5 = test5.querySelectorAll('input');
let labels5 = test5.querySelectorAll('label');
let test5_2 = document.querySelector('#test5_2');
let buttonCheck5 = document.querySelector('#buttonCheck5');
let answers5_2 = test5_2.querySelectorAll('input');
let labels5_2 = test5_2.querySelectorAll('label');
let test6 = document.querySelector('#test6');
let buttonCheck6 = document.querySelector('#buttonCheck6');
let answers6 = test6.querySelectorAll('input');
let labels6 = test6.querySelectorAll('label');
let test7 = document.querySelector('#test7');
let buttonCheck7 = document.querySelector('#buttonCheck7');

let answers = [
    'ответ 1',
    'ответ 2',
    'ответ 3',
];
let questions = [
    'вопрос 1?',
    'вопрос 2?',
    'вопрос 3?'
];
let objQuestions1 = {
    'Вопрос 1?': 'ответ 1',
    'Вопрос 2?': 'ответ 2',
    'Вопрос 3?': 'ответ 3',
}
let objQuestions2 = [
    {
        text: 'вопрос 1?',
        right: 'ответ 1',
    },
    {
        text: 'вопрос 2?',
        right: 'ответ 2',
    },
    {
        text: 'вопрос 3?',
        right: 'ответ 3',
    },
];
let arrAnswers = [0, 1, 2];
let objQuestions3 = [
    {
        text: 'вопрос 1?',
        right: 0,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 2?',
        right: 1,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 3?',
        right: 2,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
];
// Часть 1
// функция определения ответа для теста
function checkiTestResponse(elem, ans) {
    if (elem.value == ans) {
        elem.classList.remove('wrong');
        elem.classList.add('right');
    } else elem.classList.add('wrong');
    elem.blur();
}
// проверка ответа при нажатии на Enter
for (let answer of answers1) {
    answer.addEventListener('keydown', function func(event) {
        if (event.key == 'Enter') {
            checkiTestResponse(this, this.getAttribute('data-right'));
        }
    });
}
// проверка ответа при нажатии на кнопку Проверить
buttonCheck1.addEventListener('click', () => {
    for (let answer of answers1) {
        checkiTestResponse(answer, answer.getAttribute('data-right'));
    }
});
// Часть 2
// проверка ответа при нажатии на Enter
for (let i = 0; i < answers2.length; i++) {
    answers2[i].addEventListener('keydown', function func(event) {
        if (event.key == 'Enter') {
            checkiTestResponse(this, answers[i]);
        }
    });
}
// проверка ответа при нажатии на кнопку Проверить
buttonCheck2.addEventListener('click', () => {
    for (let i = 0; i < answers2.length; i++) {
        checkiTestResponse(answers2[i], answers[i]);
    }
});
// Часть 3
// создаем список вопросов и инпуты для ответов
for (let question in questions) {
    let divQuestion = document.createElement('div');
    divQuestion.innerHTML = question;
    test3.appendChild(divQuestion);
    let inputAnswer = document.createElement('input');
    test3.appendChild(inputAnswer);
}
let answers3 = test3.querySelectorAll('input');  // объвляем массив инпутов
// проверка ответа при нажатии на Enter
for (let i = 0; i < answers3.length; i++) {
    answers3[i].addEventListener('keydown', function func(event) {
        if (event.key == 'Enter') {
            checkiTestResponse(this, answers[i]);
        }
    });
}
// проверка ответа при нажатии на кнопку Проверить
buttonCheck3.addEventListener('click', () => {
    for (let i = 0; i < answers3.length; i++) {
        checkiTestResponse(answers3[i], answers[i]);
    }
});
// Часть 4_1
// создаем список вопросов и инпуты для ответов
for (let question in objQuestions1) {
    let divQuestion = document.createElement('div');
    divQuestion.innerHTML = question;
    test4.appendChild(divQuestion);
    let inputAnswer = document.createElement('input');
    test4.appendChild(inputAnswer);
}
let answers4 = test4.querySelectorAll('input');  // объвляем массив инпутов
let divQuestions4 = test4.querySelectorAll('div');
// проверка ответа при нажатии на Enter
for (let i = 0; i < answers4.length; i++) {
    answers4[i].addEventListener('keydown', function func(event) {
        if (event.key == 'Enter') {
            checkiTestResponse(this, objQuestions1[divQuestions4[i].innerHTML]);
        }
    });
}
// проверка ответа при нажатии на кнопку Проверить
buttonCheck4.addEventListener('click', () => {
    for (let i = 0; i < answers4.length; i++) {
        checkiTestResponse(answers4[i], objQuestions1[divQuestions4[i].innerHTML]);
    }
});
// Часть 4_2
// создаем список вопросов и инпуты для ответов
for (let question of objQuestions2) {
    let divQuestion = document.createElement('div');
    divQuestion.innerHTML = question['text'];
    test4_2.appendChild(divQuestion);
    let inputAnswer = document.createElement('input');
    test4_2.appendChild(inputAnswer);
}
let answers4_2 = test4_2.querySelectorAll('input');  // объвляем массив инпутов
// проверка ответа при нажатии на Enter
for (let i = 0; i < answers4_2.length; i++) {
    answers4_2[i].addEventListener('keydown', function func(event) {
        if (event.key == 'Enter') {
            checkiTestResponse(this, objQuestions2[i]['right']);
        }
    });
}
// проверка ответа при нажатии на кнопку Проверить
buttonCheck4_2.addEventListener('click', () => {
    for (let i = 0; i < answers4_2.length; i++) {
        checkiTestResponse(answers4_2[i], objQuestions2[i]['right']);
    }
});
// Часть 5_1 
// проверка ответа при нажатии на радиокнопку
for (let answer of answers5) {
    answer.addEventListener('click', () => {
        for (let answer of answers5) {
            if (!answer.checked) {
                answer.parentElement.classList.remove('right');
                answer.parentElement.classList.remove('wrong');
            }
        }
        if (answer.hasAttribute('data-right')) {
            answer.parentElement.classList.add('right');
        } else answer.parentElement.classList.add('wrong');
    });
}
// Часть 5_2
// проверка ответа при нажатии на кнопку Проверить
buttonCheck5.addEventListener('click', () => {
    for (let answer of answers5_2) {
        if (!answer.checked) {
            answer.parentElement.classList.remove('right');
            answer.parentElement.classList.remove('wrong');
        }
        if (answer.checked) {
            if (answer.hasAttribute('data-right')) {
                answer.parentElement.classList.add('right');
            } else answer.parentElement.classList.add('wrong');
        }
    }
});
// Часть 6
// проверка ответа при нажатии на кнопку Проверить
buttonCheck6.addEventListener('click', () => {
    for (let i = 0; i < answers6.length; i++) {
        if (!answers6[i].checked) {
            answers6[i].parentElement.classList.remove('right');
            answers6[i].parentElement.classList.remove('wrong');
        }
        if (answers6[i].checked) {
            if (i % 3 == arrAnswers[answers6[i].name % 3]) {
                answers6[i].parentElement.classList.add('right');
            } else answers6[i].parentElement.classList.add('wrong');
        }
    }

});
// Часть 7
// Создаем список вопросов и вариантов ответа
let nameRadio = 12;
for (let question of objQuestions3) {
    let divQuestion = document.createElement('div');
    let pQuestion = document.createElement('p');
    pQuestion.innerHTML = question['text'];
    test7.appendChild(divQuestion);
    divQuestion.appendChild(pQuestion);
    for (let i = 0; i <= objQuestions3.length - 1; i++) {
        let inputAnswer = document.createElement('label');
        let radio = document.createElement('input');
        radio.type = "radio";
        radio.name = nameRadio;
        inputAnswer.appendChild(radio);
        divQuestion.appendChild(inputAnswer);
        inputAnswer.innerHTML += question['variants'][i];
    }
    nameRadio++;
}
// проверка ответа при нажатии на кнопку Проверить
let answers7 = test7.querySelectorAll('input');
buttonCheck7.addEventListener('click', () => {
    for (let i = 0; i < answers7.length; i++) {
        if (!answers7[i].checked) {
            answers7[i].parentElement.classList.remove('right');
            answers7[i].parentElement.classList.remove('wrong');
        }
        if (answers7[i].checked) {
            if (i % 3 == objQuestions3[answers7[i].name % 3]['right']) {
                answers7[i].parentElement.classList.add('right');
            } else answers7[i].parentElement.classList.add('wrong');
        }
    }
});