
let now = new Date();
let weekArr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

//  Определите, сколько секунд прошло с начала дня до настоящего момента времени.

let dateStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

console.log('C начала дня до настоящего момента времени прошло ' + (now - dateStart) + 'мс!');

// Определите, сколько секунд секунд осталось до конца дня.

let dateEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);

console.log('До конца дня осталось ' + (dateEnd - now) + 'мс!');

// Определите, сколько дней осталось до нового года.

let dateNewYear = new Date(now.getFullYear(), 11, 31, 24);

console.log('До Нового года осталось ' + parseInt((dateNewYear - now) / (1000 * 60 * 60 * 24)) + ' дней(я)!');


// Определите, сколько пятниц 13-е в текущем году.

let friday_13 = 0;


for (let month = 0; month <= 11; month++) {
    let date = new Date(now.getFullYear(), month, 13);

    if (date.getDay() == 5) {
        friday_13++;
    }
}

console.log('В ' + now.getFullYear() + ' году ' + friday_13 + ' пятница 13-е!');

// Определите, какой год был 3 месяца назад.

let date = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

console.log('Три месяца назад был ' + date.getFullYear() + ' год!');

// Определите, какой день недели будет в последнем дне текущего месяца.

let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

console.log('Последний день текущего месяца выпадает на ' + weekArr[lastDay.getDay()]);

console.log(lastDay);

// Напишите код, который будет определять, високосный ли текущий год.

let date_29 = new Date(now.getFullYear(), 2, 0);

if (date_29.getDate() == 29) {
    console.log('Текущий год високосный!');
} else {
    console.log('Текущий год обычный!');
}

// Напишите код, который будет находить предыдущий високосный год.

for (let year = now.getFullYear(); year >= now.getFullYear() - 4; year--) {

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log('Прошлый раз високосный год был в ' + year + ' году!');
    }
}

// Напишите код, который будет находить следующий високосный год.

for (let year = now.getFullYear(); year <= now.getFullYear() + 4; year++) {

    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log('Следующий раз високосный год будет в ' + year + ' году!');
    }
}
