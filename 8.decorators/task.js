function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.findIndex((item) => item.hash === hash);

    if (objectInCache !== -1) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return "Из кэша: " + cache[objectInCache].value;
    }

    let result = func(...args);
      cache.push({hash: hash, value: result});

    if (cache.length > 5) { 
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result; 
  }

  return wrapper;
}

function debounceDecoratorNew(func, ms) {
  let timerId;
  let flag = false;

  return function(...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func(...args);
    }, ms)

    if (!flag) {
      func(...args);
      flag = true;
    }
  }
}

function debounceDecorator2(func) {
  function wrapper (...args) {
    wrapper.history.push(args);
    wrapper.count++;

    return func.call(this, ...args);
  }

  wrapper.count = 0;
  wrapper.history = [];
  
  return wrapper;
}
