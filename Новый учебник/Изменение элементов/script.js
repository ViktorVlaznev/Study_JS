// Задача 1. Дан массив. Выведите его элементы в виде списка ul.

let arr = ['1d', 2, 3, 4, 5];                                             // первоначальный массив
let ul1 = document.querySelector('#elem1');                               // привязываем список

function CreateItemList(ul, elem) {                                       // функция для создания пункта списка 

    let li = document.createElement('li');                                // создаем пункт списка
    let span = document.createElement('span');                            // создаем пункт списка
    span.innerHTML = elem;                                                // присваиваем значение пункту списка
    ul.appendChild(li);                                                   // добавляем пункт
    li.appendChild(span);                                                 // добавляем тег для редактирования текста
};

for (let elem of arr) {                                                   // запускаем цикл по данному массив

    CreateItemList(ul1, elem);                                            // применяем функцию создание пунктов списка
};

// Задача 2. Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

let ul2 = document.querySelector('#elem2');                               // привязываем список


function CreateInput(elem) {                                              // функция создания инпута 

    elem.addEventListener('click', function func() {                      // привязываем действие при нажатии на пункт списка

        let input = document.createElement('input');                      // создаем инпут
        input.value = elem.innerHTML;                                     // присваиваем ему значение
        elem.innerHTML = '';                                              // убираем пункт списка
        elem.appendChild(input);                                          // добавлем инпут
        input.focus();                                                    // добавляем курсор в инпут

        input.addEventListener('blur', function () {                      // привязываем действие при потере фокуса инпута

            elem.innerHTML = this.value;                                  // присваиваем значение инпута пункту списка
            elem.addEventListener('click', func);                         // запускаем заново обработчик событий

        });

        elem.removeEventListener('click', func);                          // останавливаем обработчик события создания инпута

    });
};

for (let i = 0; i < arr.length; i++) {                                  // запускаем цикл

    CreateItemList(ul2, arr[i]);                                        // создаем список

    let span2 = ul2.querySelectorAll('span');                           // привязываем пункты списка

    CreateInput(span2[i]);                                              // запускаем функцию создания инпута
};

// Задача 3. Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. Сделайте так, чтобы новые li также можно было редактировать.

let ul3 = document.querySelector('#elem3');                             // привязываем список
let button3 = document.querySelector('#button3');                       // привязываем кнопку

for (let i = 0; i < arr.length; i++) {                                  // запускаем цикл

    CreateItemList(ul3, arr[i]);                                        // создаем список

    let span3 = ul3.querySelectorAll('span');                           // привязываем пункты списка

    CreateInput(span3[i]);                                              // запускаем функцию создания инпута
};

button3.addEventListener('click', function () {

    CreateItemList(ul3, ['New']);                                       // создаем пункт списка

    CreateInput(ul3.lastElementChild.firstElementChild);                // запускаем функцию создания инпута
});

// Задача 4. Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

let ul4 = document.querySelector('#elem4');                             // привязываем список
let button4 = document.querySelector('#button4');                       // привязываем кнопку

function CreateLinkDelete(elem) {                                       // функция создания ссылки для удаления элемента
    let remove = document.createElement('a');                           // создаем ссылку
    remove.href = '';                                                   // адрес ссылки
    remove.innerHTML = '  удалить';                                     // название ссылки
    elem.appendChild(remove);                                           // добавляем ссылку

    remove.addEventListener('click', function (event) {                 // привязываем действие при нажатии на ссылку
        elem.parentElement.removeChild(elem);                           // удаление элемента
        event.preventDefault();                                         // удаление ссылки
    });
}

for (let i = 0; i < arr.length; i++) {                                  // запускаем цикл

    CreateItemList(ul4, arr[i]);                                        // создаем список

    let li4 = ul4.querySelectorAll('li');                               // привязываем пункты списка
    let span4 = li4[i].querySelector('span');

    CreateInput(span4);                                                 // запускаем функцию создания инпута

    CreateLinkDelete(li4[i]);                                           // запускаем функцию создания ссылки на удаление
};

button4.addEventListener('click', function () {

    CreateItemList(ul4, ['New'])                                        // создаем пункт списка

    CreateInput(ul4.lastElementChild.firstElementChild);                // запускаем функцию создания инпута

    CreateLinkDelete(ul4.lastElementChild);                             // запускаем функцию создания ссылки на удаление
});

// Задача 5. Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

let ul5 = document.querySelector('#elem5');                             // привязываем список
let button5 = document.querySelector('#button5');                       // привязываем кнопку

function CreateLinkCrossedout(elem) {
    let Crossedout = document.createElement('a');                       // создаем ссылку
    Crossedout.href = '';                                               // адрес ссылки
    Crossedout.innerHTML = '  перечеркнуть';                            // название ссылки
    elem.appendChild(Crossedout);                                       // добавляем ссылку

    Crossedout.addEventListener('click', function (event) {             // привязываем действие при нажатии на ссылку
        elem.firstElementChild.classList.add('active');                 // перечеркивание текста
        event.preventDefault();                                         // фиксация события
    });
};

for (let i = 0; i < arr.length; i++) {                                  // запускаем цикл

    CreateItemList(ul5, arr[i]);                                        // создаем список

    let li5 = ul5.querySelectorAll('li');                               // привязываем пункты списка
    let span5 = li5[i].querySelector('span');

    CreateInput(span5);                                                 // запускаем функцию создания инпута

    CreateLinkDelete(li5[i]);                                           // запускаем функцию создания ссылки на удаление

    CreateLinkCrossedout(li5[i]);                                       // запускаем функцию  ссылки перечеркивания текста
};

button5.addEventListener('click', function () {

    CreateItemList(ul5, ['New']);                                       // создаем пункт списка

    CreateInput(ul5.lastElementChild.firstElementChild);                // запускаем функцию создания инпута

    CreateLinkDelete(ul5.lastElementChild);                             // запускаем функцию создания ссылки на удаление

    CreateLinkCrossedout(ul5.lastElementChild);                         // запускаем функцию  ссылки перечеркивания текста
});

// Задача 6. Дан следующий массив с работниками:

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите этих работников в HTML таблице.

let employees = [                                                       // массив работников
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

function tableTrEmployee(table, elem) {                                 // функция создания ряда таблицы

    let tr = document.createElement('tr');                              // создаем ряд

    let td1 = document.createElement('td');                             // создаем первую ячейку ряда
    td1.innerHTML = elem.name;                                          // заполняем значение ячейки
    tr.appendChild(td1);                                                // добавляем ячейку в ряд

    let td2 = document.createElement('td');                             // создаем вторую ячейку ряда
    td2.innerHTML = elem.age;                                           // заполняем значение ячейки
    tr.appendChild(td2);                                                // добавляем ячейку в ряд

    let td3 = document.createElement('td');                             // создаем третью ячейку ряда
    td3.innerHTML = elem.salary;                                        // заполняем значение ячейки
    tr.appendChild(td3);                                                // добавляем ячейку в ряд

    table.appendChild(tr);                                              // добавляем ряд в таблицу
};

let table1 = document.getElementById('table1');                         // получаем таблицу

for (let user of employees) {                                           // запускае цикл по массиву

    tableTrEmployee(table1, user);                                      // запускаем функцию создания ряда таблицы
};

// Задача 7. Добавьте ячейкам созданной таблицы возможность редактирования.

let table2 = document.getElementById('table2');                         // получаем таблицу

for (let i = 0; i < employees.length; i++) {                            // запускае цикл по массиву

    tableTrEmployee(table2, employees[i]);                              // запускаем функцию создания ряда таблицы
};

let tds7 = table2.querySelectorAll('td');                               // получаем ячейки таблицы

for (let td of tds7) {                                                  // запускаем цикл по ячейкам

    CreateInput(td);                                                    // запускаем функцию создания инпута
};

// Задача 8. Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

let table3 = document.getElementById('table3');                         // получаем таблицу

function addColumnDelete(trs) {                                         // функция добавления столбца с ссылкой на удаление

    for (let tr of trs) {                                               // цикл для перебора рядов

        let td = document.createElement('td');                          // создаем ячейку

        CreateLinkDelete(td);                                           // запускае функцию создания ссылки на удаления

        td.addEventListener('click', function (event) {                 // условие при нажатии на ячейку удалить весь ряд            
            tr.parentElement.removeChild(tr);                           // удаление элемента
            event.preventDefault();
        });
        tr.appendChild(td);                                             // добавляем ячейку в ряд
    };
};

for (let i = 0; i < employees.length; i++) {                            // запускае цикл по массиву

    tableTrEmployee(table3, employees[i]);                              // запускаем функцию создания ряда таблицы
};

let tds8 = table3.querySelectorAll('td');                               // получаем ячейки таблицы

for (let td of tds8) {                                                  // запускаем цикл по ячейкам

    CreateInput(td);                                                    // запускаем функцию создания инпута
};

let trs8 = table3.querySelectorAll('tr');                               // получаем ряды таблицы

addColumnDelete(trs8);                                                  // запускаем функцию добавления столбца с ссылкой на удаление

// Задача 9. Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. Реализуйте редактирование ячеек для вновь добавленных работников.

let table4 = document.querySelector('#table4');                         // получаем таблицу
let input = document.querySelectorAll('.add');                          // получаем инпуты
let button9 = document.querySelector('#button9');                       // получаем кнопку добавить

for (let i = 0; i < employees.length; i++) {                            // запускае цикл по массиву

    tableTrEmployee(table4, employees[i]);                              // запускаем функцию создания ряда таблицы
};

let tds9 = table4.querySelectorAll('td');                               // получаем ячейки таблицы

for (let td of tds9) {                                                  // запускаем цикл по ячейкам

    CreateInput(td);                                                    // запускаем функцию создания инпута
};

let trs9 = table4.querySelectorAll('tr');                               // получаем ряды таблицы

addColumnDelete(trs9);                                                  // запускаем функцию добавления столбца с ссылкой на удаление

button9.addEventListener('click', function () {                         // условие при нажатии на кнопку добавить

    let tr = document.createElement('tr');                              // создаем ряд таблицы

    for (let i = 1; i <= 3; i++) {                                      // делаем цикл для добавления ячеек в ряд

        let td = document.createElement('td');                          // создаем ячейку
        td.innerHTML = input[i - 1].value;                              // присваиваем значения, соответствующего инпута
        tr.appendChild(td);                                             // добавляем ячейку
    };

    table4.appendChild(tr);                                             // добавляем ряд

    let tds9 = tr.querySelectorAll('td');                               // получаем ячейки таблицы

    for (let td of tds9) {                                              // запускаем цикл по ячейкам

        CreateInput(td);                                                // запускаем функцию создания инпута
    };

    CreateLinkDelete(tr);                                               // запускаем функцию создания ссылки на удаления в добавленном ряду
});

// Задача 10. Дан следующий массив с работниками:

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите на экран каждого работника в своем теге li тега ul.

let ul10 = document.querySelector('#elem10');

function liTrEmployee(ul, elem) {                                       // создаем функцию для вывода массива с работниками списком

    let li = document.createElement('li');                              // создаем пункт списка
    li.innerHTML = '<span>' + elem.name + '</span>' + ' ' + '<span>' + elem.age + '</span>' + ' ' + '<span>' + elem.salary + '</span>';  // присваиваем значение пункту списка
    ul.appendChild(li);                                                 // добавляем пункт
};

for (let user of employees) {                                           // запускае цикл по массиву

    liTrEmployee(ul10, user);                                           // запускаем функцию создания пункта списка
};

// Задача 11. Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.

let ul11 = document.querySelector('#elem11');

for (let user of employees) {                                           // запускае цикл по массиву

    liTrEmployee(ul11, user);                                           // запускаем функцию создания пункта списка
};

let span11 = ul11.querySelectorAll('li span');                          // привязываем теги span

for (let elem of span11) {                                              // создаем цикл по всем тегам span

    CreateInput(elem);                                                  // запускаем функцию создания инпута
};

// Задача 12. Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

let ul12 = document.querySelector('#elem12');

for (let i = 0; i < employees.length; i++) {                            // запускае цикл по массиву

    liTrEmployee(ul12, employees[i]);                                   // запускаем функцию создания пункта списка

    let li = ul12.querySelectorAll('li');

    CreateLinkDelete(li[i]);                                            // запускаем функцию создания ссылки на удаление
};

let span12 = ul12.querySelectorAll('li span');                          // привязываем теги span

for (let elem of span12) {                                              // создаем цикл по всем тегам span

    CreateInput(elem);                                                  // запускаем функцию создания инпута
};

// Задача 13. Под списком сделайте форму для добавление нового работника.

let ul13 = document.querySelector('#elem13');
let name13 = document.querySelector('#name13');                         // получаем инпуты
let age13 = document.querySelector('#age13');                           // получаем инпуты
let salary13 = document.querySelector('#salary13');                     // получаем инпуты
let button13 = document.querySelector('#button13');                     // получаем кнопку


for (let i = 0; i < employees.length; i++) {                            // запускае цикл по массиву

    liTrEmployee(ul13, employees[i]);                                   // запускаем функцию создания пункта списка

    let li = ul13.querySelectorAll('li');                               // привязываем пункты списка

    CreateLinkDelete(li[i]);                                            // запускаем функцию создания ссылки на удаление
};

let span13 = ul13.querySelectorAll('li span');                          // привязываем теги span

for (let elem of span13) {                                              // создаем цикл по всем тегам span

    CreateInput(elem);                                                  // запускаем функцию создания инпута
};

button13.addEventListener('click', function () {                        // условие при нажатии на кнопку добавить

    let li = document.createElement('li');                              // создаем пункт списка
    li.innerHTML = '<span>' + name13.value + '</span>' + ' ' + '<span>' + age13.value + '</span>' + ' ' + '<span>' + salary13.value + '</span>';  // присваиваем значение пункту списка
    ul13.appendChild(li);                                               // добавляем пункт

    CreateLinkDelete(li);                                               // запускаем функцию создания ссылки на удаление

    let span = li.querySelectorAll('span');                             // привязываем теги span

    for (let elem of span) {                                            // создаем цикл по тегам span

        CreateInput(elem);                                              // запускаем функцию создания инпута
    };
});