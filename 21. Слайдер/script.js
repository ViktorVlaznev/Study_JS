// Часть 1
let texts = ['text1', 'text2', 'text3'];
let i1 = 0;
slider1.innerHTML = texts[0]
setInterval(() => {
    slider1.innerHTML = texts[i1 % texts.length];
    i1++;
}, 1000);
// Часть 2
let i2 = 0; // внешняя переменная
slider2.innerHTML = texts[i2];
// тексты ходят по кругу
left.addEventListener('click', function () {
    if (i2 == 0) {
        i2 = texts.length - 1;
        slider2.innerHTML = texts[i2];
    } else {
        i2--;
        slider2.innerHTML = texts[i2 % texts.length];
    }
});
right.addEventListener('click', function () {
    i2++;
    slider2.innerHTML = texts[i2 % texts.length];
});
// не ходят по кругу
let i2_2 = 0; // внешняя переменная
slider2_2.innerHTML = texts[i2_2];
left2.addEventListener('click', function () {
    if (i2_2 > 0) {
        i2_2--;
        slider2_2.innerHTML = texts[i2_2];
    }
});
right2.addEventListener('click', function () {
    if (i2_2 < texts.length - 1)
        i2_2++;
    slider2_2.innerHTML = texts[i2_2];
});
// Часть 3
let i3 = 0
let arrPic = ['1.png', '2.png', '3.png'];
slider3.src = 'img/' + arrPic[i3];
setInterval(() => {
    slider3.src = 'img/' + arrPic[i3 % arrPic.length];
    i3++;
}, 2000);
left3.addEventListener('click', function () {
    if (i3 == 0) {
        i3 = arrPic.length - 1;
        slider3.src = 'img/' + arrPic[i3];
    } else {
        i3--;
        slider3.src = 'img/' + arrPic[i3 % arrPic.length];
    }
});
right3.addEventListener('click', function () {
    i3++;
    slider3.src = 'img/' + arrPic[i3 % arrPic.length];
});
let i3_2 = 0
slider3_2.src = 'img/' + arrPic[i3_2];
left3_2.addEventListener('click', function () {
    if (i3_2 > 0) {
        i3_2--;
        slider3_2.src = 'img/' + arrPic[i3_2];
    }
});
right3_2.addEventListener('click', function () {
    if (i3_2 < arrPic.length - 1)
        i3_2++;
    slider3_2.src = 'img/' + arrPic[i3_2];
});
// Часть 4
let i = 0;
let img4 = slider4.querySelectorAll('img');
for (let elem of img4) {
    elem.classList.add('active');
}
img4[i].classList.remove('active');
setInterval(() => {
    img4[i % img4.length].classList.add('active');
    i++;
    img4[i % img4.length].classList.remove('active');
}, 1000);