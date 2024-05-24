// fs is file system
const fs = require("fs");

//needs 2 arguments, first one is what we want to read (path)

//read a file
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

//write-create a file
const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOut);
console.log("File written");
