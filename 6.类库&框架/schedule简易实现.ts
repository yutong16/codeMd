import {
  unstable_IdlePriority as IdlePriority,
  unstable_ImmediatePriority as ImmediatePriority,
  unstable_LowPriority as LowPriority,
  unstable_NormalPriority as NormalPriority,
  unstable_UserBlockingPriority as UserBlockingPriority,
  unstable_getFirstCallbackNode as getFirstCallbackNode,
  unstable_scheduleCallback as scheduleCallback,
  unstable_cancelCallback as cancelCallback,
  unstable_shouldYield as shouldYield,
  CallbackNode,
} from "scheduler";

// 定义任务优先级类型
type Priority =
  | typeof IdlePriority
  | typeof ImmediatePriority
  | typeof LowPriority
  | typeof NormalPriority
  | typeof UserBlockingPriority;

// 定义任务接口
interface Work {
  priority: Priority;
  count: number;
}

const priority2UserList: Priority[] = [
  ImmediatePriority,
  UserBlockingPriority,
  NormalPriority,
  LowPriority,
];

const priority2Name = [
  "noop",
  "ImmediatePriority",
  "UserBlockingPriority",
  "NormalPriority",
  "LowPriority",
  "IdlePriority",
];

const root = document.querySelector("#root") as Element;
const contentBox = document.querySelector("#content") as Element;

const workList: Work[] = [];
let prevPriority: Priority = IdlePriority;
let curCallback: CallbackNode | null;

// 初始化优先级对应按钮
priority2UserList.forEach((priority) => {
  const btn = document.createElement("button");
  root.appendChild(btn);
  btn.innerText = priority2Name[priority];

  btn.onclick = () => {
    // 插入work
    workList.push({
      priority,
      count: 100,
    });
    // 执行work
    schedule();
  };
});

// 调度逻辑
function schedule() {
  // 当前可能存在正在调度的回调
  const cbNode = getFirstCallbackNode();
  // 取出优先级最高的work
  const curWork = workList.sort((w1, w2) => {
    return w1.priority - w2.priority;
  })[0];

  if (!curWork) {
    // 没有work需要执行，退出调度
    curCallback = null;
    cbNode && cancelCallback(cbNode);
    return;
  }

  const { priority: curPriority } = curWork;
  if (curPriority === prevPriority) {
    // 有work在进行， 比较该work与正在进行的work的优先级
    // 如果优先级相同， 则退出调度
    return;
  }

  // 准备调度当前优先级最高的work
  // 调度之前，如果有work正在执行，则中断它
  cbNode && cancelCallback(cbNode);

  // 调度当前优先级最高的work
  curCallback = scheduleCallback(curPriority, perform.bind(null, curWork));
}

// 执行具体的work
function perform(work: Work, didTimeout?: boolean): any {
  // 是否需要同步执行， 满足 1. work 是同步优先级， 2. 当前调度的任务已过期，需要同步执行
  const needSync = work.priority === ImmediatePriority && didTimeout;
  while ((needSync || !shouldYield()) && work.count > 0) {
    work.count--;
    // 执行具体的工作
    inserItem(work.priority + "");
  }

  // 执行work后，将上一个优先级字段值设置为当前已经执行完的work的优先级，方便下次调度时判断
  prevPriority = work.priority;

  if (!work.count) {
    // 从workList中删除已经完成的work
    const workIndex = workList.indexOf(work);
    workList.splice(workIndex, 1);
    // 重置优先级
    prevPriority = IdlePriority;
  }

  const prevCallback = curCallback;
  // 调度完成后，如果callback变化，代表这是新的work
  schedule();

  const newCallback = curCallback;
  if (newCallback && prevCallback === newCallback) {
    // callback没变，代表是同一个work，只不过时间切片时间用尽(5ms)
    // 返回的函数会被Scheduler继续调用
    return perform.bind(null, work);
  }
}

// 插入元素
const inserItem = (content: String) => {
  const ele = document.createElement("span");
  ele.innerText = `${content}`;
  ele.className = `pri-${content}}`;
  doSomeBuzyWork(100000);
  contentBox.appendChild(ele);
};

// 模拟一些耗时的工作
function doSomeBuzyWork(time: number) {
  let i = time;
  while (i--) {
    // do something
  }
}
