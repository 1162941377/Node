const fs = require("fs");
const path = require("path");

const dirname = path.resolve(__dirname, "./myFiles/zjc");

// 传入一个目录，判断是否存在
async function exists(filename) {
  try {
    // 如果存在，则返回文件的信息
    await fs.promises.stat(filename);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      // 文件不存在
      return false;
    }
    // 抛出错误信息
    throw error;
  }
}

async function test() {
  const res = await exists(dirname);
  if (res) {
    // 文件存在
    console.log("该目录已存在，无需再次创建");
  } else {
    // 不存在
    await fs.promises.mkdir(dirname);
    console.log("创建成功");
  }
}

test();