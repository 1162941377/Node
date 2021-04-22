// 出于安全性考虑，后端配置了请求重定向，所以该方式建立在理论的基础上

const net = require("net");
// 创建一个客户端
const socket = net.createConnection(
  {
    host: "duyi.ke.qq.com",
    port: 80,
  },
  () => {
    console.log("连接成功");
  }
);

/**
 * 提取出响应字符串中的消息头和消息体的信息
 * @param {*} response
 */
function parseResponse(response) {
  const index = response.indexOf("\r\n\r\n"); // 获取下标
  const head = response.substring(0, index); // 获取消息头
  const body = response.substring(index + 2); // 获取消息体
  const headParts = head.split("\r\n"); // 获取消息头的具体内容
  const headerArray = headParts.slice(1).map((str) => {
    return str.split(":").map((s) => s.trim());
    // 将消息头中的请求方式和协议名去除，将各个部分分为数组，前一项是属性名，后一项是属性值，并去除开头的空格
  });
  const header = headerArray.reduce((a, b) => {
    a[b[0]] = b[1]; // 将刚刚得到的数组转换为对象方式，键为数组的前一项，也就是属性，值为数组的后一项，也就是属性值
    return a;
  }, {});
  // 将这个对象返回，里面有两项属性和对应的属性值
  return {
    head,
    body: body.trimStart(),
  };
}

let receive = null; // 用于判断是否有内容已经传输

/**
 * 该函数用于判断数据已经传输完成
 * @returns 返回的是当前接收到的数据的字节数和总字节数的差值
 * 如果是true，表示的是数据已经完成；如果是false，反之，继续接收数据
 */
function isOver() {
  const contentLength = +receive.header["Content-Length"]; // 请求头中返回的数据的总字节数
  const curReceivedLength = Buffer.from(receive.body, "utf-8").byteLength; // 当前接收到的数据的字节数
  console.log(contentLength, curReceivedLength);
  return curReceivedLength > contentLength; // 将差值返回
}

socket.on("data", (chunk) => {
  // console.log("接收到的一部分数据为：" + chunk.toString("utf-8"));
  const response = chunk.toString("utf-8");
  if (!receive) {
    // 如果没有开始传输，就开始
    receive = parseResponse(response);
    if (isOver) {
      // 第一次就传输完成的话，直接断开连接
      socket.end();
    }
    // 因为是第一次传输，不管有没有传输完毕，都无法做其它事情
    return;
  }
  receive.body += response; // 如果没有传输完毕，接着传输，拼接在body后面
  if (isOver) {
    socket.end();
    return;
  }
  // socket.end(); // 主动断开连接
});

// 向socket中写入内容
socket.write(`GET / HTTP/1.1
Host: duyi.ke.qq.com

`);

socket.on("close", () => {
  console.log(receive.body); // 在传输完毕后，查看body中的值是否符合我们的预期
  console.log("结束了");
});
