// 判断一个实例是否是其父类或其父类祖先的实例

let myInstanceOf = (target, origin) => {
  while (target) {
    if (target.__proto__ === origin.prototype) {
      return true;
    }
    target = target.__proto__;
  }
  return false;
};

let a = [1, 2, 3];

console.log(myInstanceOf(a, Array));
console.log(myInstanceOf(a, Object));

