// функция работы кнопки backspace для задачи экранной клавиатуры
function buttonBackspace(text) {
    let ss = text.selectionStart;
    let se = text.selectionEnd;
    let ln = text.value.length;
    let textbefore = text.value.substring(0, ss);    //текст до выбранного текста
    let textafter = text.value.substring(se, ln);    //текст после выбранного текста
    if (ss == se && ss != 0) // если текст не выбран
    {
        text.value = text.value.substring(0, ss - 1) + text.value.substring(se, ln);
        text.focus();
        text.selectionStart = ss - 1;
        text.selectionEnd = ss - 1;
    }
    else // если текст выбран
    {
        text.value = textbefore + textafter;
        text.focus();
        text.selectionStart = ss;
        text.selectionEnd = ss;
    }
}
// функция работы кнопок изменения текста для задачи экранной клавиатуры
function buttonTextNumberMain(elem, text) {
    let ss = text.selectionStart;
    let se = text.selectionEnd;
    let ln = text.value.length;
    let textbefore = text.value.substring(0, ss);    //текст до выбранного текста
    let textafter = text.value.substring(se, ln);    //текст после выбранного текста

    if (ss == se) // если текст не выбран
    {
        text.value = text.value.substring(0, ss) + elem + text.value.substring(se, ln);
        text.focus();
        text.selectionStart = ss + 1;
        text.selectionEnd = ss + 1;
    }
    else // если текст выбран
    {
        text.value = textbefore + elem + textafter;
        text.focus();
        text.selectionStart = ss + 1;
        text.selectionEnd = ss + 1;
    }
}
// функция работы кнопки TAB для задачи экранной клавиатуры
function buttonTab(text) {
    let ss = text.selectionStart;
    let se = text.selectionEnd;
    let ln = text.value.length;
    let textbefore = text.value.substring(0, ss);    //текст до выбранного текста
    let textafter = text.value.substring(se, ln);    //текст после выбранного текста

    if (ss == se) // если текст не выбран
    {
        text.value = text.value.substring(0, ss) + '     ' + text.value.substring(se, ln);
        text.focus();
        text.selectionStart = ss + 5;
        text.selectionEnd = ss + 5;
    }
    else // если текст выбран
    {
        text.value = textbefore + '     ' + textafter;
        text.focus();
        text.selectionStart = ss + 5;
        text.selectionEnd = ss + 5;
    }
}
// функция работы кнопки DEL для задачи экранной клавиатуры
function buttonDel(text) {
    let ss = text.selectionStart;
    let se = text.selectionEnd;
    let ln = text.value.length;
    let textbefore = text.value.substring(0, ss);    //текст до выбранного текста
    let textafter = text.value.substring(se, ln);    //текст после выбранного текста

    if (ss == se) // если текст не выбран
    {
        text.value = text.value.substring(0, ss) + text.value.substring(se + 1, ln);
        text.focus();
        text.selectionStart = ss;
        text.selectionEnd = ss;
    }
    else // если текст выбран
    {
        text.value = textbefore + textafter;
        text.focus();
        text.selectionStart = ss;
        text.selectionEnd = ss;
    }
}
// функция работы кнопки PageUp для задачи экранной клавиатуры
function buttonPageUp(text) {
    text.selectionStart = 0;
    text.selectionEnd = 0;
}
// функция работы кнопки PageDown для задачи экранной клавиатуры
function buttonPageDown(text) {
    text.selectionStart = text.value.length;
    text.selectionEnd = text.value.length;
}
// функция работы кнопки Home для задачи экранной клавиатуры
function buttonHome(text) {
    let ss = text.selectionStart;
    let textbefore = text.value.substring(0, ss);
    text.focus();
    text.selectionStart = textbefore.lastIndexOf('\n') + 1;
    text.selectionEnd = textbefore.lastIndexOf('\n') + 1;
}
// функция работы кнопки End для задачи экранной клавиатуры
function buttonEnd(text) {
    let ss = text.selectionStart;
    let se = text.selectionEnd;
    let ln = text.value.length;
    let textbefore = text.value.substring(0, ss);
    let textafter = text.value.substring(se, ln);
    text.focus();
    if (!/\n+/.test(textafter)) {
        text.selectionStart = text.value.length;
        text.selectionEnd = text.value.length;
    } else {
        text.selectionStart = textafter.indexOf('\n') + textbefore.length;
        text.selectionEnd = textafter.indexOf('\n') + textbefore.length;
    }
}
// функция работы кнопки стрелка вправо для задачи экранной клавиатуры
function buttonArrowRight(text) {
    text.focus();
    text.selectionEnd += 1;
    text.selectionStart = text.selectionEnd;
}
// функция работы кнопки стрелка влево для задачи экранной клавиатуры
function buttonArrowLeft(text) {
    let ss = text.selectionStart;
    text.focus();
    if (ss != 0) {
        text.selectionStart -= 1;
        text.selectionEnd = text.selectionStart;
    }
}
// функция работы кнопки стрелка вверх для задачи экранной клавиатуры
function buttonArrowUp(text) {
    let ss = text.selectionStart;
    let textbefore = text.value.substring(0, ss);
    let lnPrevious = textbefore.lastIndexOf('\n') - textbefore.lastIndexOf('\n', textbefore.lastIndexOf('\n') - 1) - 1; // длина предыдущей строки
    let lnTransfer = textbefore.length - textbefore.lastIndexOf('\n') - 1;
    if (lnPrevious > lnTransfer) {
        text.selectionStart = textbefore.lastIndexOf('\n', textbefore.lastIndexOf('\n') - 1) + textbefore.length - textbefore.lastIndexOf('\n');
        text.selectionEnd = textbefore.lastIndexOf('\n', textbefore.lastIndexOf('\n') - 1) + textbefore.length - textbefore.lastIndexOf('\n');
    } else if (textbefore.length <= text.value.indexOf('\n')) {
        text.selectionStart = 0;
        text.selectionEnd = 0;
    } else {
        text.selectionStart = textbefore.lastIndexOf('\n');
        text.selectionEnd = textbefore.lastIndexOf('\n');
    }
    text.focus();
}
// функция работы кнопки стрелка вниз для задачи экранной клавиатуры
function buttonArrowDown(text) {
    let ss = text.selectionStart;
    let se = text.selectionEnd;
    let ln = text.value.length;
    let textbefore = text.value.substring(0, ss);
    let textafter = text.value.substring(se, ln);    //text following selected text
    let lnNext;                                      // длина следующей строки
    if (textafter.indexOf('\n', textafter.indexOf('\n') + 1) != -1) {
        lnNext = textafter.indexOf('\n', textafter.indexOf('\n') + 1) - textafter.indexOf('\n') - 1;
    } else lnNext = textafter.length - textafter.indexOf('\n') - 1;
    let lnTransfer = textafter.indexOf('\n');
    let lnTransferLast = textbefore.length - textbefore.lastIndexOf('\n') - 1;
    if (lnTransfer == -1) {
        text.selectionStart = ln;
        text.selectionEnd = ln;
    } else if (lnNext >= lnTransferLast) {
        text.selectionStart = ss + textafter.indexOf('\n') + textbefore.length - textbefore.lastIndexOf('\n');
        text.selectionEnd = ss + textafter.indexOf('\n') + textbefore.length - textbefore.lastIndexOf('\n');
    } else {
        text.selectionStart = ss + textafter.indexOf('\n') + lnNext + 1;
        text.selectionEnd = ss + textafter.indexOf('\n') + lnNext + 1;
    }
    text.focus();
}

module.exports = { buttonArrowDown, buttonArrowUp, buttonArrowLeft, buttonArrowRight, buttonEnd, buttonHome, buttonPageDown, buttonPageUp, buttonDel, buttonTab, buttonTextNumberMain, buttonBackspace };