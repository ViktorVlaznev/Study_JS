// обявляем переменные
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');
// функция создания ряда списка
function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.innerHTML = value;
    td.classList.add(name);
    return tr.appendChild(td);
}
// функция суммирования
function recountTotal() {
    let costs = table.querySelectorAll('.cost');
    let sum = 0;
    for (let cost of costs) {
        sum += +cost.innerHTML // находим сумму и записываем ее в #total
    }
    return total.innerHTML = sum;
}
// функция для редактирования ячеек таблицы
function allowEdit(td, type = 'text') {
    td.addEventListener('dblclick', function func() {
        let input = document.createElement('input');
        input.value = td.innerHTML;
        input.type = type;
        td.innerHTML = '';
        td.appendChild(input);
        input.focus();
        this.removeEventListener('dblclick', func);
        let tr = td.parentNode;
        let costTd = tr.querySelector('.cost');
        let priceTd = tr.querySelector('.price');
        let amountTd = tr.querySelector('.amount');
        input.addEventListener('blur', () => {
            td.innerHTML = input.value;
            td.addEventListener('dblclick', func);
            if (td.classList.contains('price') || td.classList.contains('amount')) {
                costTd.innerHTML = priceTd.innerHTML * amountTd.innerHTML;
                recountTotal();
            }
        });
        input.addEventListener('keydown', function func(event) {
            if (event.key == 'Enter') {
                td.innerHTML = input.value;
                td.addEventListener('dblclick', func);
                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    costTd.innerHTML = priceTd.innerHTML * amountTd.innerHTML;
                    recountTotal();
                }
            }
        });
    });
}
// событие при нажатии на кнопку добавить
add.addEventListener('click', function () {
    let tr = document.createElement('tr');
    allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'), 'number');
    allowEdit(createCell(tr, amount.value, 'amount'), 'number');
    createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'удалить', 'remove').addEventListener('click', function (event) {
        tr.parentElement.removeChild(tr);
        recountTotal();
    });
    table.appendChild(tr);
    name.value = '';
    price.value = '';
    amount.value = '';
    recountTotal();
    name.focus();
});