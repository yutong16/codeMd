let oldObj = {
  id: 1,
  name: "xx",
  msg: {
    age: 18,
  },
};

let newObj = {};

function deepClone(newObj, oldObj) {
  for (var k in oldObj) {
    let item = oldObj[k];
    // 判断Item 是否是数组，对象，简单类型
    if (item instanceof Array) {
      newObj[k] = [];
      deepClone(newObj[k], item);
    } else if (item instanceof Object) {
      newObj[k] = {};
      deepClone(newObj[k], item);
    } else {
      newObj[k] = item;
    }
  }
}

// 真正的深度克隆,考虑obj内循环引用的情况
const obj = {
  arr: [1, 2, 3],
  a: 4,
};

obj.sub = obj;
obj.arr.push(obj);

/**
 *深度克隆的思路
 1. 判断对象属性是否是基本类型，若是，则直接返回，否则进行引用类型的拷贝 递归逻辑
 2. 若引用类型中出现循环引用类型，这里需要使用缓存机制，才能保证递归函数不被爆栈
 3. 缓存对象 使用 weakMap，弱引用有助于垃圾回收
 * @param {*} obj
 */
function myDeepClone(obj) {
  const _cache = new WeakMap();
  function _deepClone(obj) {
    // 如果拷贝目标不是引用类型，则直接返回
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    // 判断缓存里面是否存在引用对象，如存在，则直接返回
    if (_cache.has(obj)) {
      return _cache.get(obj);
    }
    const result = Array.isArray(obj) ? [] : {};
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        result[k] = _deepClone(obj);
      }
    }
    _cache.set(obj, result);
    return result;
  }
  return _deepClone(obj);
}
