'use strict';

// let array = ['color1.png', 'color2.png','color3.png'];
// console.log(array[0]);

// alert('Hello world');
// let checkRobot =  confirm('Are you robot?');

// if (checkRobot == true) {
//     alert('Sorry, but we must redirect you .... :(')
// } else {
//     alert('Welcome! :)')
// }

// let name = prompt('Please, enter your name.')
// let surname = prompt('Please, enter your surname.')

// if ((name && surname != null) && (name && surname != false)) {
//     alert("Hello, " + name + " " + surname + "!")
// } else {
//     alert("You dont answered on one or all questions");
// }
// console.log(typeof(array));

var money = +prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var main = prompt('Введите обязательную статью расходов в этом месяце');
var how = +prompt('Во сколько обойдется?');


var appData = {
    money: money,
    timeData: time,
    expenses: {
        main: how
    },
    optionalExpenses: null,
    income: null,
    savings: false
}

alert('Ваш бюджет на 1 день: ' + (money - how)/30 + ' руб/грн/долл.')