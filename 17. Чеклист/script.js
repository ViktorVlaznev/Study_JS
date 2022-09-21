// обявляем переменные
let input = document.querySelector('#input');
let list = document.querySelector('#list');
// событие при нажатии на клавишу enter
input.addEventListener('keydown', function func(event) {
    if (event.key == 'Enter') {
        // создаем пункт списка
        let li = document.createElement('li');
        let task = document.createElement('span');
        task.classList.add('task');
        task.innerHTML = this.value;
        //событие при двойном нажатии для редактирования
        task.addEventListener('dblclick', function func() {
            let edit = document.createElement('input');
            edit.value = this.innerHTML;
            this.innerHTML = '';
            this.appendChild(edit);
            let self = this;
            this.removeEventListener('dblclick', func);
            // сохраниение пункта списка при потере фокуса
            edit.addEventListener('blur', function (event) {
                self.innerHTML = this.value;
                self.addEventListener('dblclick', func);
            });
        });
        li.appendChild(task);
        // создание ссылки на удаление
        let remove = document.createElement('span');
        remove.innerHTML = 'удалить';
        remove.classList.add('remove');
        remove.addEventListener('click', function () {
            this.parentElement.parentElement.removeChild(this.parentElement);
        });
        li.appendChild(remove);
        // создание ссылки на перечеркивание пункта списка
        let mark = document.createElement('span');
        mark.innerHTML = 'сделано';
        mark.classList.add('mark');
        mark.addEventListener('click', function () {
            this.parentElement.classList.toggle('done');
        });
        li.appendChild(mark);
        list.appendChild(li);
        // очищение инпута
        this.value = '';
    }
});