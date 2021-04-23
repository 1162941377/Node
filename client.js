//静态资源服务器
// http://localhost:9527/index.html  -> public/index.html 文件内容
// http://localhost:9527/css/index.css  -> public/css/index.css 文件内容

const http = require("http");
const path = require("path");
const fs = require("fs");
const URL = require("url");

/**
 * 判断文件是否存在
 * @param {*} filename 文件路径
 */
async function getStat(filename) {
  try {
    return await fs.promises.stat(filename);
  } catch {
    return null;
  }
}

/**
 * 根据传递的url地址，返回对应的页面
 * @param {*} url url路径参数
 */
async function getFileContent(url) {
  const urlObj = URL.parse(url);
  let filename; // 文件路径
  filename = path.resolve(__dirname, "public", urlObj.pathname.substr(1));
  let stat; // 记录文件是否存在
  stat = await getStat(filename);
  if (!stat) {
    // 文件不存在
    return null;
  }
  if (stat.isDirectory()) {
    // 如果是目录
    filename = path.resolve(
      __dirname,
      "public",
      urlObj.pathname.substr(1),
      "index.html" // 默认都是index.html文件
    );
    stat = await getStat(filename);
    if (!stat) {
      // 还是不存在
      return null;
    }
    return await fs.promises.readFile(filename);
  }
  return await fs.promises.readFile(filename);
}

/**
 * 请求和响应处理函数
 * @param {*} req 请求结果
 * @param {*} res 响应结果
 */
async function hanlder(req, res) {
  const info = await getFileContent(req.url);
  if (info) {
    res.write(info);
  } else {
    // 没有对应的文件，返回404错误
    res.stautsCode = 404;
    res.write("Resouce is not exist");
  }
  res.end(); // 断开连接
}

const server = http.createServer(hanlder); // 创建server对象

// 监听端口号
server.on("listening", () => {
  console.log("server start listening 8080");
});

server.listen(8080);
