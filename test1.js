const { EventEmitter } = require("events");

// 创建一个事件处理对象
// 可以注册一个事件，可以触发事件
const event = new EventEmitter();

event.on("demo", (username, age) => {
  console.log("demo事件被触发了", username, age);
});

event.emit("demo", "zjc", "18");
