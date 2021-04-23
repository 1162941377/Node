const fs = require("fs");

fs.readFile("./index.js", () => {
  setTimeout(() => console.log(1), 0);
  setImmediate(() => console.log(2));
});

// 结果一定为：2、1