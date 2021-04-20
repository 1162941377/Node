/**
 * 读取每一个目录中的所有子目录和文件
 * 每个目录都是一个对象
 * 属性：
 *  name，ext，isFile，size，createTime，updateTime
 * 方法：
 *  getChildren()：得到目录的所有子目录，如果是文件，则返回空数组
 *  getContent()：读取文件内容，如果是目录，则返回null
 */

const fs = require("fs");
const path = require("path");

class File {
  constructor(filename, name, ext, isFile, size, createTime, updateTime) {
    this.filename = filename;
    this.name = name;
    this.ext = ext;
    this.size = size;
    this.isFile = isFile;
    this.createTime = createTime;
    this.updateTime = updateTime;
  }

  static async getFile(filename) {
    const stat = await fs.promises.stat(filename);
    const name = await path.basename(filename);
    const ext = await path.extname(filename);
    const size = stat.size;
    const isFile = stat.isFile();
    const createTime = stat.birthtime;
    const updateTime = stat.ctime;
    return new File(filename, name, ext, isFile, size, createTime, updateTime);
  }

  async getContent(isBuffer = false) {
    if (!this.isFile) {
      // 目录没有内容
      return null;
    }
    let content = null;
    if (isBuffer) {
      // 采用编码格式
      content = await fs.promises.readFile(this.filename, "utf-8");
    } else {
      content = await fs.promises.readFile(this.filename);
    }
    return content;
  }

  async getChildren() {
    if (this.isFile) {
      // 文件没有子目录
      return [];
    }
    let children = await fs.promises.readdir(this.filename);
    children = children.map((name) => {
      const result = path.resolve(this.filename, name);
      return File.getFile(result);
    });
    return Promise.all(children);
  }
}

async function test() {
  const filename = path.resolve(__dirname, "./myFiles");
  const file = await File.getFile(filename);
  console.log(file);
  console.log(await file.getContent(true));
  console.log(await file.getChildren());
}

test();
