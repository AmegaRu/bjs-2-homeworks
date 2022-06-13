'use strict'

function solveEquation(a, b, c) {
  let arr;
  const d = b ** 2 - (4 * a * c);
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [- b / (2 * a)];
  } else if (d > 0) {
    arr = [
      (-b + Math.sqrt(d) )/(2 * a),
      (-b - Math.sqrt(d) )/(2 * a),
    ]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  percent = Number(percent) / 100;
  contribution = Number(contribution);
  amount = Number(amount);

  if (typeof percent != 'number') {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (typeof contribution != 'number') {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (typeof amount != 'number') {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  };

  let s = amount - contribution;
  
  let today = new Date();

  let p = percent / 12;

  let year_1 = date.getFullYear();
  let year_2 = today.getFullYear();
  let month_1 = date.getMonth();
  let month_2 = today.getMonth();
  let n = (year_1 - year_2) * 12 + (month_1 - month_2);

  let payment = s * (p + (p / (((1 + p)**n) - 1)));

  totalAmount = (Math.round((payment * n) * 100) / 100);

  return totalAmount;
}