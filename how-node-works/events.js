const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

//observer and listener
myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: flo");
});

myEmitter.on("newSale", (stock) => {
  console.log(`there are now ${stock} items left in stock`);
});

//emitter
myEmitter.emit("newSale", 9);

/////////////////
const server = http.createServer();

//on = listener
server.on("request", (req, res) => {
  console.log("request recieved");
  res.end("request recieved");
});

server.on("request", (req, res) => {
  console.log("another recieved");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for request");
});
