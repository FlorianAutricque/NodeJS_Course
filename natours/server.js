const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  //connect to atlas
  .connect(DB, {
    //connect to local db
    // .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection success");
  });

const app = require("./app");
//////START SERVER
const port = process.env.PORT || 3000;
app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port: ${port}`);
});
