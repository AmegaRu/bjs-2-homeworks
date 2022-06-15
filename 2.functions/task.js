// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return ({ min: min, max: max, avg: avg });
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  };

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (k = 0; k < arrOfArr.length; k++) {
    if (max < func(arrOfArr[k])) {
      max = func(arrOfArr[k]);
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let dif = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
    dif = max - min;
  }

  return Math.abs(dif);
}
