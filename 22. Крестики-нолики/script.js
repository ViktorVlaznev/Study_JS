// обявляем массив ячеек 
let cells = document.querySelectorAll('#field td');
// сделаем функцию для заполнения ячейки
function start(cells) {
    let i = 0;
    for (let cell of cells) {
        cell.addEventListener('click', function func() {
            this.innerHTML = ['X', 'O'][i % 2];
            this.removeEventListener('click', func);
            if (isVictory(cells)) {
                alert(this.innerHTML);
            } else if (i == 8) {
                alert('ничья');
            }
            i++;
        });
    }
}
// Функция определения побидителя
function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let comb of combs) {
        if (
            cells[comb[0]].innerHTML == cells[comb[1]].innerHTML &&
            cells[comb[1]].innerHTML == cells[comb[2]].innerHTML &&
            cells[comb[0]].innerHTML != ''
        ) {
            return true;
        }
    }

    return false;
}
start(cells);