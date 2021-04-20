const fs = require("fs");
const path = require("path");

async function test() {
  const fromFilename = path.resolve(__dirname, "./myFiles/1.txt");
  const buffer = await fs.promises.readFile(fromFilename);
  console.log(buffer); // 读取文件内容，以buffer形式
  const toFilename = path.resolve(__dirname, "./myFiles/1.copy.txt");
  await fs.promises.writeFile(toFilename, buffer);
  console.log("复制成功");
}

test();
