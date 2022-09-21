// объявление переменных
let inputEnter = document.querySelector('#inputEnter');
let tableDescription = document.querySelector('#tableDescription');
// создадим объект с историческими событиями
let objEvents = {
    2000: [
        {
            date: '20.01.2000',
            name: 'событие 1',
            text: 'описание события 1'
        },
        {
            date: '21.01.2000',
            name: 'событие 2',
            text: 'описание события 2'
        },
    ],
    2001: [
        {
            date: '10.02.2001',
            name: 'событие 3',
            text: 'описание события 3'
        },
        {
            date: '11.02.2001',
            name: 'событие 4',
            text: 'описание события 4'
        },
        {
            date: '12.02.2001',
            name: 'событие 5',
            text: 'описание события 5'
        },
    ],
    2002: [
        {
            date: '01.03.2002',
            name: 'событие 6',
            text: 'описание события 6'
        },
        {
            date: '02.04.2002',
            name: 'событие 7',
            text: 'описание события 7'
        },
        {
            date: '03.05.2002',
            name: 'событие 8',
            text: 'описание события 8'
        },
        {
            date: '04.06.2002',
            name: 'событие 9',
            text: 'описание события 9'
        },
    ],
};

// событие при нажатии на клавишу Enter
inputEnter.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        let year = inputEnter.value;
        tableDescription.innerHTML = '';
        if (objEvents[year]) {
            for (let event of objEvents[year]) {
                let tr = document.createElement('tr');

                let td;

                td = document.createElement('td');
                td.innerHTML = event.date;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = event.name;
                tr.appendChild(td);

                td = document.createElement('td');
                td.innerHTML = event.text;
                tr.appendChild(td);

                tableDescription.appendChild(tr);
            }
        }
    }
});