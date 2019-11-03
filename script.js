'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", ''),
  time = prompt("Введите дату в формате YYYY-MM-DD", '');

  while (isNaN(money) || money=="" || money==null) {
    money = +prompt("Ваш бюджет на месяц?", '');
  }
} start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    saving:true
  };


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
         i--;
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
  } detectLevel();


  function checkSaving() {
     if (appData.saving == true) {
       let save = +prompt("Какова сумма накоплений?", ""),
           percent = +prompt("Под какой процент?", "");

       appData.montIncome = save/100/12*percent;
       alert("Доход в месяц с вашего депозита:"+appData.montIncome);
     }
  } checkSaving();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
       let a = prompt("Первая статья необязательных расходов?", "");
       appData.optionalExpenses[i] = a;
    }
  } chooseOptExpenses();


 function chooseIncome() {
    for (let i = 0; i < 2; i++) {
      let items = promps('Что приносит дополнительный доход?' , '')
      if (items != '' && (typeof(items)) != null) {
        appData.income = items;
        appData.income = push(protpt('Может что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach(function(mass, i) {
           alert("Способы дополнительного заработка:" + (i+1) + '-' + mass);
        });
      } else {
          i--;
      }
    }
  } chooseIncome();

  for (let key in appData) {
    alert('Наша программа включает в себя данные: ' + key + ' ' + appData[key]);
  };
