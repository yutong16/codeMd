// 给fetch添加超时功能
// 正常情况下，fetch是一个promise,返回的状态只有成功和失败两种情况。
/**
 *
 *
 * @param {number} [timeout=1000]
 */
function createFetchWithTimeout(timeout = 1000) {
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const singalController = new AbortController();
      fetch(url, {
        ...options,
        signal: singalController.signal,
      }).then(resolve, reject);
      setTimeout(() => {
        reject(new Error("fetch timeout"));
        // 取消请求
        singalController.abort();
      }, timeout);
    });
  };
}



function customFetch(url, options = {}, timeout = 5000) {
  // 创建一个 AbortController 实例
  const controller = new AbortController();
  const signal = controller.signal;

  // 创建一个定时器，用于超时控制
  const timeoutId = setTimeout(() => {
    controller.abort(); // 中断请求
  }, timeout);

  // 返回一个 Promise 对象
  return new Promise((resolve, reject) => {
    // 合并 options，添加 signal 以及其他配置
    options.signal = signal;

    // 使用原生 fetch 进行请求
    fetch(url, options)
      .then(response => {
        clearTimeout(timeoutId); // 清除超时定时器
        resolve(response); // 将响应传递给调用者
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          reject(new Error('请求超时'));
        } else {
          reject(error);
        }
      });
  });
}

// 示例用法
customFetch('https://api.example.com/data')
  .then(response => {
    // 处理响应
    console.log(response);
  })
  .catch(error => {
    // 处理错误
    console.error(error);
  });
