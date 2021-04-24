const http = require("http");

const { EventEmitter } = require("events");

// 继承自EventEmitter类
module.exports = class extends EventEmitter {
  constructor(url, options) {
    super(); // 继承父类方法
    this.url = url; // 请求路径
    this.options = options; // 配置对象
  }

  send(body = "") {
    const request = http.request(this.url, this.options, (res) => {
      let result = ""; // 请求体
      
      res.on("data", (chunk) => {
        result += chunk.toString("utf-8");
      });

      res.on("end", () => {
        this.emit("res", res.headers, result);
      });
    });

    // 将响应结果返回
    request.write(body);
    request.end();
  }
};
