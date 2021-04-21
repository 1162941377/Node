const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./temp/test_write.txt");

const ws = fs.createWriteStream(filename, {
  encoding: "utf-8",
  highWaterMark: 16 * 1024,
});

let i = 0;

// 向文件中写入内容
function write() {
  let flag = true;
  while (i < 1024 * 1024 * 10 && flag) {
    // 表示的是文件大小是 10 MB，且只有当 flag 为 true，也就是队列中还有空间可写时，才会执行写入的函数
    flag = ws.write("a");
    i++;
  }
}

write();

ws.on("drain", () => {
  write();
});
