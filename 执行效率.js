let i = 0;

console.time("test");

function test() {
  i++;
  if (i < 1000) {
    // setTimeout(test, 0);
    setImmediate(test);
  } else {
    console.timeEnd("test");
  }
}

test();
