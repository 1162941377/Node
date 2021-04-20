/**
 * 初探module解析模块原理

 * @param {*} modulePath 模块路径
 */
function require(modulePath) {
  // 1、将modulePath转换为绝对路径

  // 2、判断该模块是否已缓存
  if (require.cache[绝对路径]) {
    return require.cache[绝对路径].result;
  }

  // 3、读取文件内容

  // 4、包裹到一个函数中
  function __temp(modulePath, exports, require, __dirname, __filename) {
    // 模块内容

    // 5、创建module对象

    module.exports = {};
    const exports = module.exports;
    // 里面中的 this 等同于 exports
  }

  __temp.call(
    module.exports,
    module,
    exports,
    require,
    module.path,
    module.filename
  );

  return module.exports;
}
