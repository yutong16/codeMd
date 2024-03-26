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
