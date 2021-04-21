const fs = require("fs");
const path = require("path");

// 方式1
async function method1() {
  const fromFile = path.resolve(__dirname, "./temp/test_write.txt");
  const toFile = path.resolve(__dirname, "./temp/test.copy.txt");

  console.time("方式1");
  const content = await fs.promises.readFile(fromFile);
  await fs.promises.writeFile(toFile, content);
  console.timeEnd("方式1");
  console.log("复制完成");
}

method1();

// 方式2
async function method2() {
  const fromFile = path.resolve(__dirname, "./temp/test_write.txt");
  const toFile = path.resolve(__dirname, "./temp/test.copy.txt");

  console.time("方式2");
  // 创建的是读取和写入流
  const rs = fs.createReadStream(fromFile);
  const ws = fs.createWriteStream(toFile);

  rs.on("data", (chunk) => {
    const flag = ws.write(chunk);
    // 判断是否队列中的剩余空间
    if (!flag) {
      rs.pause();
    }
  });

  ws.on("drain", () => {
    rs.resume();
  });

  rs.on("end", () => {
    // 关闭文件
    ws.close();
    console.timeEnd("方式2");
    console.log("复制完成");
  });
}

method2();
