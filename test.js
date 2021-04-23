const start = Date.now();

setTimeout(() => {
  // 输出执行到语句的时间
  console.log("setTimeout", Date.now() - start);
}, 200);

const fs = require("fs");

fs.readFile("./index.js", "utf-8", () => {
  console.log("readFile");
  const start = Date.now();
  while (Date.now() - start < 300) {}
});
