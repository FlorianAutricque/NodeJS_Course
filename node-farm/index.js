// fs is file system
const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////
/////FILE
// //BLOCKING, SYNCHRONOUS WAY
// //read a file
//needs 2 arguments, first one is what we want to read (path)
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// //write-create a file
// const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

// //NON-BLOCKING, ASYNCHRONOUS WAY

// //callback hell
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("file has been written");
//       });
//     });
//   });
// });

//////////////////////////////////////
////SERVER

//build an API
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

///start a local server
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview");
  } else if (pathName === "/product") {
    res.end("This is the product");

    //build an API
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

//2arguments: port & host
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
