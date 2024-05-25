const fs = require("fs");
const crypto = require("crypto");

setTimeout(() => console.log("Timer 1 finito"), 0);
setImmediate(() => console.log("immidiaite 1 finito"));

// this log last because its a big file
fs.readFile("test-file.txt", () => {
  console.log("1/0 finito");

  setTimeout(() => console.log("Timer 2 finito"), 0);
  setTimeout(() => console.log("Timer 3 finito"), 3000);
  setImmediate(() => console.log("immidiaite 2 finito"));

  process.nextTick(() => console.log("process nextTick"));

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("password encrypted");
  });
});

console.log("hello from top level code");
