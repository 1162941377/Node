const util = require("util");

/* async function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(duration);
    }, duration);
  });
}

const delayCallback = util.callbackify(delay);

delayCallback(500, (err, res) => {
  console.log(res);
});
 */

/* function delayCallback(duration, callback) {
  setTimeout(() => {
    callback(null, duration);
  }, duration);
}

const delay = util.promisify(delayCallback);

(async () => {
  const res = await delay(500);
  console.log(res);
})(); */

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
};

console.log(util.isDeepStrictEqual(obj1, obj2));
