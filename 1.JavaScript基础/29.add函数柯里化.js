// add(1); // 1
// add(1)(2); // 3
// add(1)(2)(3)；// 6
// add(1)(2, 3); // 6
// add(1, 2)(3); // 6
// add(1, 2, 3); // 6

function curryingAdd() {
  // 第一次执行时，使用一个[]来存放参数
  let _args = Array.prototype.slice.call(arguments);
  //   在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数
  let _adder = function () {
    _args.push(...arguments);
  };
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b;
    });
  };
  return _adder;
}

console.log(curryingAdd(1, 2)(3, 4)(5));
