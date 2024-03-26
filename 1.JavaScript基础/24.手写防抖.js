function debounce(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("不是一个函数");
  }
  let timer = null;
  return function () {
    var _this = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}

// 手写防抖

function debounce2(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("不是一个函数");
  }
  let timer = null;
  return function () {
    var _this = this;
    var args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args);
    }, delay);
  };
}

// 手写节流 （时间戳）
// 触发事件时立即执行，以后每过delay秒之后才执行一次
// ，并且最后一次触发事件若不满足要求不会被执行
function myThrottle(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("is not a function");
  }
  let prev = null;
  return function () {
    var args = arguments;
    var _this = this;
    var now = new Date().getTime();
    if (now - prev >= delay) {
      fn.apply(_this, args);
      prev = now;
    }
  };
}


// 手写节流  定时器版
// 将定时器的清除操作放在定时器的回调里面

/**
 *
 *第一次触发时不会执行，而是在delay秒之后才执行，
 当最后一次停止触发后，还会再执行一次函数。
 */
function myThrottle2(fn, delay) {
  if (typeof fn !== "function") {
    throw new Error("is not a function");
  }
  let timer = null;
  return function () {
    var args = arguments;
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
}


