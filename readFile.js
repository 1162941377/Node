const fs = require("fs");
const path = require("path");

const filename = path.resolve(__dirname, "./myFiles/1.txt");

// fs.readFile(filename, "utf-8", (err, res) => {
//   console.log(res);
// });

// const content = fs.readFileSync(filename, "utf-8");
// console.log(content);

async function test() {
  const content = await fs.promises.readFile(filename, "utf-8");
  console.log(content);
}

test();
