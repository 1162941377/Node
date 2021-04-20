# Node

1）node 是一个 js 的运行环境

2）它提供了比浏览器更多的操作权限

## 模块化

> node 使用的是 CommonJs 模块化，也支持 es6 模块化，不过略显麻烦

> 目前，node 中的 es6 模块化仍然处于测试阶段

> 模块要么是 CommonJs，要么是 es6

> 默认情况下是 CommonJs

> 如果要使用 es6 模块化，后缀名改为.mjs，最近的 package.json 文件中添加 type: 'module'

> 当使用 es6 模块化运行时，必须要添加 --experimental-modules 标记

> 现在可以不用（当前版本：v14.15.4）
