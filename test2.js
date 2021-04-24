const { EventEmitter } = require("events");

// 创建一个事件处理对象
// 可以注册事件，可以触发事件
const event = new EventEmitter();

event.on("demo", () => {
  console.log("demo事件被触发了1");
});

const fn1 = () => {
  console.log("demo事件被触发了2");
};

event.on("demo", fn1);

event.on("demo", () => {
  console.log("demo事件被触发了3", "该事件只触发一次");
});

event.on("test", () => {
  console.log("test事件被触发了", "该事件只触发一次");
});

event.on("test", () => {
  console.log("test事件被触发了");
});

event.emit("demo");
event.off("demo", fn1);
event.emit("demo");
event.emit("demo");
event.emit("test");

console.log("script end");
