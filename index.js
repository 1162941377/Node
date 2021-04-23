setImmediate(() => {
  // 直接放入checks队列
  console.log(1);
});

process.nextTick(() => {
  // 同步代码直接输出
  console.log(2);
  // 放入nextTick微队列中
  process.nextTick(() => {
    console.log(6);
  });
});

// 同步代码直接输出
console.log(3);

// 放入promise微队列中
Promise.resolve().then(() => {
  // 同上
  console.log(4);
  // 同上
  process.nextTick(() => {
    // 同上
    console.log(5);
  });
});

// 结果为：3、2、6、4、5、1