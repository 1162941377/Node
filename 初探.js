setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

// 输出顺序不一定

/**
 * setTimeout会放入timers队列中，
 * setImmediate会放入checkes队列中
 */
