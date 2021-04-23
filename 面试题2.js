async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout0");
}, 0);

setTimeout(function () {
  console.log("setTimeout3");
}, 3);

setImmediate(() => console.log("setImmediate"));

process.nextTick(() => console.log("nextTick"));

async1();

new Promise(function (resolve) {
  console.log("promise1");
  resolve();
  console.log("promise2");
}).then(function () {
  console.log("promise3");
});

console.log("script end");

/**
 * await 之后的代码会放入then回调函数中
 * 结果为：
 * script start
 * async1 start
 * async2
 * promise1
 * promise2
 * async1 end
 * promise3
 * script end
 * nextTick
 * 下面三个的输出顺序不一定，看代码的执行效率和机器的速度
 * setTimeout0
 * setTimeout3 / setImmdiate
 * setImmdiate / setTimeout3
 */
