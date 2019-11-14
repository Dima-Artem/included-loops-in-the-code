'use strict';

let start = document.getElementById('start'),
    budgetValue = document.querySelectorAll('.budget-value')[0],
    daybudgetValue = document.querySelectorAll('.daybudget-value')[0],
    levelValue = document.querySelectorAll('.level-value')[0],
    expensesValue = document.querySelectorAll('.expenses-value')[0],
    optionalexpensesValue = document.querySelectorAll('.optionalexpenses-value')[0],
    incomeValue = document.querySelectorAll('.income-value')[0],
    monthsavingsValue = document.querySelectorAll('.monthsavings-value')[0],
    yearsavingsValue = document.querySelectorAll('.yearsavings-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item')[0],
    incomeItem = document.querySelector('.choose-income'),
	  checkSavings = document.getElementById('savings'),
	  sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    optionalExpensesVal = document.querySelector('.optionalexpenses-value'),
    money,
    time,
    appData = {
      budget:money,
      timeData:time,
      expenses:{},
      optionalExpenses:{},
      income:[],
      saving:false
    };


start.addEventListener('click',function() {
  time = prompt("Введите дату в формате YYYY-MM-DD", '');
  money = +prompt("Ваш бюджет на месяц?", '');

  while (isNaN(money) || money=="" || money==null) {
    money = +prompt("Ваш бюджет?", '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() +1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});


expensesBtn.addEventListener('click',()=> {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let expense1 = expensesItem[i].value,
        cost1 = expensesItem[++i].value;
    if(expense1 != '' && cost1 != '' && (typeof(expense1)) != null && (typeof(cost1)) != null && expense1.length < 50 ) {
       appData.expenses[expense1]=cost1;
       sum += +cost1;
     }else {
       i = i - 1;
     }
  }
  expensesValue.textContent = sum;
});


optionalExpensesBtn.addEventListener('click',()=> {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
     let a = optionalexpenses[i].value;
     appData.optionalExpenses[i] = a;
     optionalexpensesValue.textContent = appData.optionalExpenses[i] + ' ';
  }
});


optionalExpensesBtn.addEventListener('click',()=> {
  if(appData.budget != undefined) {

    appData.moneyPerDay = (appData.budget/30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay > 2000) {
      levelValue.textContent = "Высокий уровень достатка";
    } else {
      levelValue.textContent = "Произошла ошибка";
    }

  } else {
    daybudgetValue.textContent = "Произошла ошибка";
  }
});


incomeItem.addEventListener('input',()=> {
  let items = incomeItem.value;
  appData.income = items.split(', ');
  incomeValue.textContent = appData.income;
});


checkSavings.addEventListener('click',()=> {
  if(appData.saving == true) {
    appData.saving = false;
  } else {
    appData.saving = true;
  }
});


sumValue.addEventListener('input',()=> {
  if(appData.saving == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.montIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.montIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input',()=> {
  if(appData.saving == true) {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.montIncome = sum/100/12*percent;
    appData.yearIncome = sum/100*percent;

    monthsavingsValue.textContent = appData.montIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});


countBudgetBtn.addEventListener('click',()=> {
  appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
  optionalExpensesVal.textContent = appData.moneyPerDay;
});
