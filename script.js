// 'use strict'; 

var money = +prompt("Ваш бюджет на месяц?"); //бюджет
var time = prompt("Введите дату в формате YYYY-MM-DD", ''); //дата




var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

        // Первый   вариант 

for (let i = 0; i < 2; i++)  {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        if (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null
        && a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i--,
            alert("Введите статью без использования цыфр");
        };
   };

        // Второй   вариант 

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
//         (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50)
//         ? ((console.log(typeof (a)), appData.expenses[a] = b))
//         : (alert("Введите статью без использования цыфр"), (console.log(a.length)), i--);
// };

        // Третий   вариант 

// let n = 0; 
//     while (n < 2) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//             console.log(a);
//             console.log(b);
//         (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50)
//         ? (console.log(typeof (a)), appData.expenses[a] = b, n++)
//         : (alert("Введите статью без использования цыфр"), (console.log(a.length)));
//     };


        // Четвертый   вариант 

// let m = 0;
//     do {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//             console.log(a);
//             console.log(b);
//         (!a.match(/^\d+$/) && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50)
//         ? (console.log(typeof (a)), appData.expenses[a] = b, m++)
//         : (alert("Введите статью без использования цыфр"), (console.log(a.length)));
//     }
//     while (m < 2) 



var result = appData["budget"] / 30;
document.write("<h2> Ваш доход на один день состовляет = <u>" + result.toFixed(2) + "</u> </h2>");

if (result < 100) {
    console.log("Минимальный уровень достатка");    
} else if (result > 100 && result < 2000) {
    console.log("Средний уровень достатка");
} else if (result > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка!!");
};
console.log(appData);

