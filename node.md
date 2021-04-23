# Node

1）node 是一个 js 的运行环境

2）它提供了比浏览器更多的操作权限

## 回顾 HTTP 请求

> 分为普通模式和长连接模式

- 长连接模式：请求头中设置了 _Connection: keep-alive_

_HTTP 请求类似于你问我答，客户端请求数据，服务器才返回；如果是普通模式，每次都会重新发送建立连接_

## HTTP 模块

> http 模块建立在 net 模块上，无需手动管理 socket，无需手动组装消息格式

> http.request(url, [options], [callback]])

> http.createServer([options], [requestListener])

### 客户端

> 请求：ClientRequest 对象

> 响应：IncomingMessage 对象

### 服务器

> 请求：IncomingMessage 对象

> 响应：ServerResponse 对象
