# Node

1）node 是一个 js 的运行环境

2）它提供了比浏览器更多的操作权限

## 全局对象

1）setTimeout：延迟输出

2）setInterval：定时器

3）setImmediate：延迟输出，暂时可以理解为延迟 0 秒输出结果

4）console：控制台输出结果

5）\_\_dirname：文件所在目录，并非 global 属性

6）\_\_filename：文件所在路径，并非 global 属性

7）Buffer：获取类型化数组，继承自 UInt8Array

> 计算机中存储的基本单位是：字节（byte）

> 在计算机中，使用和输出时，可能会用 十六 进制表示

[详情请见] http://blog.yuanjin.tech/article/94

8）process：进程

> cwd：返回的是当前命令行的目录

> exit：退出当前进程，可传入参数，0表示成功退出，默认为0；1表示有错误

> argv：String 类型，获取命令中的所有参数

> platform：获取当前操作系统的平台，输出结果为win32，表示支持32位以上的操作系统

> kill（pid）：根据进行 ID 杀死进程

> env：获取系统中环境的变量对象

9）global：全局对象，里面还有个 global 属性，类似于 window 中还有个 window 属性
