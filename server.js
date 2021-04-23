const http = require("http");
const url = require("url");

/**
 * 处理请求信息
 * @param {*} req 请求信息
 */
function handleReq(req) {
  console.log("有请求来了");
  const urlObj = url.parse(req.url);
  console.log("请求路径", urlObj.pathname);
  console.log("请求方式", req.method);
  console.log("请求头", req.headers);

  let body = ""; // 请求体
  req.on("data", (chunk) => {
    body += chunk.toString("utf-8");
  });

  req.on("end", () => {
    console.log("请求体", body);
  });
}

function hanldeRes(res) {
  res.setHeader("username", "zjc");
  res.setHeader("pssword", "zjc");
  res.statusCode = 200;
  res.write("Hello World");
  res.end();
}

const server = http.createServer((req, res) => {
  handleReq(req);
  hanldeRes(res);
});

server.on("listening", () => {
  console.log("server start listening 8080");
});

server.listen(8080);
