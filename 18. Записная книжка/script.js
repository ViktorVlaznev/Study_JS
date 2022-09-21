// обявляем переменные
let notes = document.querySelector('#notes')
let texts = [];
let k = 1;
let textMain = document.querySelector('#textMain');
let buttonSave = document.querySelector('#buttonSave');
let buttonUpdate = document.querySelector('#buttonUpdate');
let newNoteButton = document.querySelector('#newNoteButton');
// скрываем кнопку редактирования
buttonUpdate.classList.add('hidden');

// событие при нажатию на кнопку сохранить
buttonSave.addEventListener('click', () => {
    texts.push(textMain.value);                                                         // добавляем текст из окна ввода в массив
    textMain.value = '';                                                                // очищаем тест из окна ввода
    let record = document.createElement('li');                                          // создаем список меню
    notes.appendChild(record);
    let nameRecord = document.createElement('span');
    nameRecord.classList.add('open');
    nameRecord.innerHTML = 'запись ' + k;
    record.appendChild(nameRecord);
    let deleteRecord = document.createElement('span');
    deleteRecord.classList.add('delete');
    deleteRecord.innerHTML = 'X';
    record.appendChild(deleteRecord);
    k++;
    let arrNotes = notes.querySelectorAll('.open');                                       // привязываем массив записей массива
    let arrDelete = notes.querySelectorAll('.delete');                                    // массив элементов для удаления записи
    for (let i = 0; i < arrNotes.length; i++) {                                           // перебор пунктов списка записей
        arrNotes[i].classList.remove('active');
        arrNotes[i].addEventListener('click', () => {                                     // событие при нажатии на пункт меню 
            buttonSave.classList.add('hidden');
            buttonUpdate.classList.remove('hidden');
            for (let notes of arrNotes) {
                notes.classList.remove('active');
            }
            textMain.value = texts[i];
            arrNotes[i].classList.add('active');
            buttonUpdate.addEventListener('click', () => {                                // Событие при нажатии на кнопку сохранить
                if (arrNotes[i].classList.contains('active')) {
                    texts[i] = textMain.value;
                }
            });
        });

    }
    for (let arr of arrDelete) {
        arr.addEventListener('click', () => {                                             // событие при нажатии для удаления записи
            buttonUpdate.classList.add('hidden');
            buttonSave.classList.remove('hidden');
            textMain.value = '';
            arr.parentElement.parentElement.removeChild(arr.parentElement);
        });
    }
    newNoteButton.addEventListener('click', () => {                                        // событие при нажатии на пункт новая запись в меню
        textMain.value = '';
        buttonUpdate.classList.add('hidden');
        buttonSave.classList.remove('hidden');
        for (let notes of arrNotes) {
            notes.classList.remove('active');
        }
    });
});