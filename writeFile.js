const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./myFiles/2.txt");

// fs.writeFile(filename, "这是第二个文本内容", (err, res) => {
//   console.log("写入成功");
// });

async function test() {
  const buffer = Buffer.from("这是第二个文本内容", "utf-8");
  await fs.promises.writeFile(filename, buffer, {
    flag: "a",
  });
  console.log("写入成功");
}

test();
