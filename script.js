'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", ''),
  optionalExpenses = {},
  income = [],

  appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses1:optionalExpenses,
  income1:income,
  saving:true
  };

function start() {
money = +prompt("Ваш бюджет на месяц?", '');
time = prompt("Введите дату в формате YYYY-MM-DD", '');

while (isNaN(money) || money=="" || money==null) {
  money = +prompt("Ваш бюджет на месяц?", '');
}
} start();


function start2() {
for (let i = 0; i < 2; i++) {
  let expense1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
      cost1 = prompt("Во сколько обойдется?", '');
      if((typeof(expense1)) === 'string' && expense1 != '' && cost1 != '' &&
       (typeof(expense1)) != null && (typeof(cost1)) != null && expense1.length < 50 ) {
       console.log('Отлично');
       appData.expenses[expense1]=cost1;
     }else {
       console.log('Плохо');
       i=i-1;
     }
}
} start2();


function detectDayBudget() {
  appData.moneyPerDay = (appData.budget/30).toFixed();
  alert("Ежедневный бюджет:" + appData.moneyPerDay);
} detectDayBudget();


function detectLevel() {
  if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
  } else {
  console.log("Произошла ошибка");
  }
}  detectLevel();


function checkSaving() {
   if (appData.saving == true) {
     let save = +prompt("Какова сумма накоплений?"),
         percent = +prompt("Под какой процент?");

     appData.montIncome = save/100/12*percent;
     alert("Доход в месяц с вашего депозита:"+appData.montIncome);
   }
} checkSaving();


// function chooseOptExpenses() {
//   for (let i = 0; i < 3; i++) {
//     let itemOptionalExpenses = prompt("Статья необязательных расходов?");
//   }
//
// }
function chooseOptExpenses() {
  let a = prompt("Первая статья необязательных расходов?"),
      b = prompt("Вторая статья необязательных расходов?"),
      c = prompt("Третья статья необязательных расходов?");

  optionalExpenses: {
    1 : a,
    2 : b,
    3 : c
  }
}
