const fs = require("fs");
const server = require("http").createServer();

//listen to request
server.on("request", (req, res) => {
  // Solution 1 = have to load everything to memory
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  //solution 2 = create a stream. We can consume piece by piece
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  // });
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found");
  // });

  //solution 3 = readable stream
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //redableSource.pipe(wrtieableDestination)
});

//start server
server.listen(8000, "127.0.0.1", () => {
  console.log("listenig...");
});
