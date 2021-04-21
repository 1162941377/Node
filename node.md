# Node

1）node 是一个 js 的运行环境

2）它提供了比浏览器更多的操作权限

## 文件流

> 内存数据和磁盘文件数据之间的流动

> 流是有方向的

### 可读流 Readable

> 数据从源头流向内存

### 可写流 Writable

> 数据从内存流向源头

### 双工流 Duplex

> 数据既可从源头流向内存，又可以从内存流向源头

### 需要流的原因

- 其它介质和内存的数据规模不一致

_内存的空间远远小于硬盘的空间_

- 其它介质和内存的数据处理能力不一致

_内存的处理速度远远高于硬盘的处理速度_

### 文件流的创建

_都是继承自 Readable 或 Writable 类_

> autoClose: true 默认，表示自动关闭

- fs.createReadStream(path, [options])

> 创建一个文件可读流，用于读取文件的内容

> options 参数：encoding 编码方式、start 起始字节、end 结束字节、highWaterMark 每次读取的数量

> hightWaterMark：如果 encoding 有值，该数量表示的是一个字符数；如果 encoding 值为 null，或不没有设置，该数量表示的是一个字节数

> 返回的子类 ReadStream：提供了 on 函数，有 open、error、data、close、end 事件，只有当调用 data 方法时，才会去读取文件内容；提供了 pause 方法，暂停读取，会触发 pause 事件；resume 方法，恢复读取，会触发 resume 事件；这两个方式都是为了解决内存和磁盘之间的文件流传输产生的问题

- fs.createWriteStream(path, [options])

> 创建一个文件流

> options 参数：flags 操作文件的方式（w 覆盖、a 追加、其它）、encoding 编码方式、start 起始字节、highWaterMark 每次最多写入的字节数

> 返回的子类 WriteStream：提供了 on 函数，有 open、error、close 事件；提供了 write 方法，参数为文件内容，可以是字符串或 Buffer，返回一个 Boolean（true 或 false） 值，当写入队列清空时，会触发 drain 事件；提供了 end 方法，结束写入，将自动关闭文件

    > true表示的是通道没有被填满，接下来的数据可以直接写入，无需排队；

    > false表示的是通道已经被填满，接下来的数据不能直接写入，将进入写入队列；背压问题的来源

- fs.pipe(ws)：node 提供的函数，帮我们处理 rs 和 ws 之间的处理逻辑

> 将可读流连接到可写流

> 返回的是参数值

> 该方法可解决背压问题
