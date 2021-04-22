// 模拟开启一个服务器，当客户端请求数据时，返回响应的结果

const net = require("net");
// 创建一个服务器
const server = net.createServer();

const fs = require("fs");
const path = require("path");

server.listen(8080); // 要监听的端口号

server.on("listening", () => {
  console.log("server listening start");
});

server.on("connection", (socket) => {
  // console.log(socket);
  console.log("有客户端连接到服务器");

  socket.on("data", async (chunk) => {
    // console.log(chunk.toString("utf-8"));
    const filename = path.resolve(__dirname, "./hsq.jpg"); // 文件路径
    const bodyBuffer = await fs.promises.readFile(filename); // 读取文件内容，当做请求体
    // 创建的是请求头
    const headBuffer = Buffer.from(
      `HTTP/1.1 200 OK
Content-Type: image/jpeg

`,

      "utf-8"
    );
    // 拼接请求头和请求体
    const result = Buffer.concat([headBuffer, bodyBuffer]);
    socket.write(result);
    socket.end();
  });

  socket.on("close", () => {
    console.log("连接关闭");
  });
});
