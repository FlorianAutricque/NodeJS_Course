// console.log(arguments);

//module.exports
const C = require("./test-module-1");

const calculator1 = new C();
console.log(calculator1.add(2, 5));

//exports
// const calculator2 = require("./test-module-2");

//distructuration
const { add, multiple, divide } = require("./test-module-2");

console.log(add(2, 5));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
