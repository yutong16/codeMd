/**
 * 依次顺序执行一系列任务
 * 所有任务全部完成后可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用户暂停任务
 * 每个任务具有原子性，即不可中断，只能在两个任务之间中断
 * 如果其中一个任务失败，则终止整个任务序列的执行
 * @param {*} tasks 任务列表，每个任务无参，异步
 */
function processTasks(...tasks) {
  // 任务执行控制器
  let isRunning = false;
  const result = [];
  let i = 0;
  return {
    async start() {
      return new Promise(async (resolve) => {
        // 如果任务在执行，则直接返回
        if (isRunning) {
          return;
        }
        isRunning = true;
        //   依次执行任务
        while (i < tasks.length) {
          const r = await tasks[i]();
          // 将函数执行结果存入result
          result.push(r);
          i++;
          // 如果用于点击暂停,则不在执行新的task,跳出循环
          if (!isRunning) {
            return;
          }
        }
        isRunning = false;
        // 返回函数执行结果
        resolve(result);
      });
    },
    pause() {
      isRunning = false;
    },
  };
}
