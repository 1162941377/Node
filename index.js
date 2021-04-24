// 导入自己写的请求方法
const MyRequest = require("./MyRequest");

// 创建一个请求
const request = new MyRequest("http://duyi.ke.qq.com");

// 调用自定义的函数
request.send();

// 输出对应的请求头和请求体
request.on("res", (headers, body) => {
  console.log(headers);
  console.log(body);
});
