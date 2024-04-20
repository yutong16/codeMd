/*
手写promsie实现思路
1. 首先，定义三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。
2. 定义一个构造函数，用于创建promise对象。
3. 在构造函数中，定义一个状态变量，初始值为pending。
4. 定义一个用于保存成功回调函数的数组，和一个用于保存失败回调函数的数组。
5. 在构造函数中，接收一个执行器函数作为参数。
6. 在执行器函数中，执行异步操作，并判断操作的结果。
   - 如果操作成功，调用resolve方法将状态设置为fulfilled，并调用成功回调函数。
   - 如果操作失败，调用reject方法将状态设置为rejected，并调用失败回调函数。
   在resolve和reject方法中，分别调用成功回调函数数组和失败回调函数数组中的函数。
   在resolve和reject方法中，分别将成功值和失败原因作为参数传递给回调函数。
*/

const PENDING = "pending";
const FUlFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  #status = PENDING;
  #result = undefined;
  #handlers = [];
  constructor(executor) {
    const resolve = (value) => {
      this.changeStatus(FUlFILLED, value);
    };
    const reject = (reason) => {
      this.changeStatus(REJECTED, reason);
    };

    // 执行器函数
    try {
      executor(resolve, reject);
    } catch (e) {
      this.changeStatus(REJECTED, e);
    }
  }
  changeStatus(status, result) {
    if (this.#status !== PENDING) return;
    this.#status = status;
    this.#result = result;
    this.#run();
  }

  // 判断是否是promise对象的实例
  #isPromiseLike(value) {
    if (
      value !== null &&
      (typeof value === "object" || typeof value === "function")
    ) {
      return typeof value.then === "function";
    }
    return false;
  }
  // 将任务放入微任务队列
  // 自己创建微任务，分环境
  // 1. node 环境，使用nextTick
  // 2. 浏览器环境，使用MutationObserver
  #runMicroTask(func) {
    if (typeof process === "object" && typeof process.nextTick === "function") {
      process.nextTick(func);
    } else if (typeof MutationObserver === "function") {
      const observer = new MutationObserver(func);
      observer.observe(document.body, { attributes: true });
      document.body.setAttribute("x", "");
      observer.disconnect();
      return;
    } else {
      // 兼容性处理，无法创建微任务，只能使用宏任务来兼容了。
      setTimeout(func, 0);
    }
  }

  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== "function") {
        const settled = this.#status === FUlFILLED ? resolve : reject;
        settled(this.#result);
        return;
      }
      try {
        const data = callback(this.#result);
        if (this.#isPromiseLike(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  #run() {
    if (this.#result === PENDING) return;
    while (this.#handlers.length) {
      // resolve reject的调用时机
      // 1. 对应的回调不是函数
      // 2. 回调是函数，运行函数，判断函数运行过程是否报错，没报错reslove, 否则reject
      // 3. 回调函数的返回结果是Promise
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.unshift();
      if (this.#status === FUlFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      } else {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      this.#run();
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    throw 123;
  });
});
console.log(p);
