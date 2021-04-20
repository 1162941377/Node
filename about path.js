const path = require("path");

const basename = path.basename("Z/zjc/index.html");

console.log(basename);

console.log(path.sep);

console.log(path.delimiter);

const dir = path.dirname("Z/zjc/z");

console.log(dir);

const ext = path.extname("Z/zjc/z.js");

console.log(ext);

const basePath = "Z/zjc";

const fullPath = path.join(basePath, "../", "z.js");

console.log(fullPath);

const normalize = path.normalize("Z/zjc/z");

console.log(normalize);

const relative = path.relative("Z/zjc/", "Z/zjc/data/data.json");

console.log(relative);

const rel = path.resolve("Z/zjc/z.js");

console.log(rel);
