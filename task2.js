// 1
var admine, name;
name = 'Джон';
admine = name;
console.log(admine);

// 2.1
let number, flag;
while (flag != '0') {
    number = prompt('Введите число меньше 10');
    if (number < 10)
        alert('Верно');
    else alert('Неверно');
    flag = prompt('Продолжаем? (yes-1/no-0)')
}

// 2.2
let message,login;
switch (login) {
    case 'Сотрудник':
        message = 'Привет';
        break;
    case 'Директор':
        message = 'Здравствуйте';
        break;
    case '':
        message = 'Нет логина';
        break;
    default:
        message = '';
}

// 2.3
let age = prompt('Enter your age');
if (age >= 14 && age <= 90) {
    alert("Good!")
}
else alert("Oh,OK");

// 2.4
const number = prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3: alert('Вы ввели число 2, а может и 3');
    default:
        alert('Только 0, 1, 2, или 3!')
        break;
}

// 3.1
for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i);
}

//3.2
let number;
do {
    number = prompt("Введите число > 100 :");
}
while (number < 100 && number);

// 4
let n;
n = prompt('Введите число n:')
label:                              
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0)
            continue label;
    }
    console.log(i);
}
