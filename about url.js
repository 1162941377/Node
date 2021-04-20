const URL = require("url");

// console.log(URL);

/* const url = new URL("https://cn.bing.com:8080?username=zjc&password=666");

console.log(url); */

const url = {
  href: "https://cn.bing.com:8080?username=zjc&password=666#content",
  origin: "https://cn.bing.com:8080",
  protocol: "https",
  username: "zjc",
  password: "666",
  host: "cn.bing.com:8080",
  port: "8080",
  pathname: "/",
  search: "?uername=zjc&password=666",
  hash: "#content",
};

const newURL = URL.format(url);

console.log(newURL);
