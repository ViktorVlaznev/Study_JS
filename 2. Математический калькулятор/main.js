// часто применяемые общие функции
// функция скрытия элементов из массива, кроме избранного
function hidingElem(arr, visible) {
    for (let elem of arr) {
        if (elem != visible) {
            elem.style.display = 'none';
        }
    }
}
// функция создания элемента
function createElementCalculate(child, parent, id) {
    let name = document.createElement(child);
    name.id = id;
    parent.appendChild(name);
}

module.exports = { hidingElem, createElementCalculate };