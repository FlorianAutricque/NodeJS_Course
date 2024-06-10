const mongoose = require("mongoose");

const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION!💥 Shutting down ...");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

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

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION!💥 Shutting down ...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

//////START SERVER
const port = process.env.PORT || 3000;
app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port: ${port}`);
});

//TESTING connection with db
// const testTour = new Tour({
//   name: "The Parl Camper",
//   price: 997,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR 💥💥", err);
//   });
