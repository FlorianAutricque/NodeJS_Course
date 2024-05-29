const fs = require("fs");
const express = require("express");

const app = express();
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("Hello from middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/////CRUD////////////

//READ all
const getAllTours = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours: tours,
    },
  });
};

//READ one
const getTour = (req, res) => {
  console.log(req.params);

  //convert string to a number
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  //send error when there is no id matching the search
  // if (id > tours.length) {
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "sucess",
    data: {
      tour: tour,
    },
  });
};

//CREATE
const createTour = (req, res) => {
  // console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      //201 = create
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};

//UPDATE

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour: ">Updated tour here...>",
    },
  });
};

//DELETE

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  //204 = no content
  res.status(204).json({
    status: "success",
    data: null,
  });
};

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

/////////////CRUD///////////////

//Read all the tours
// app.get("/api/v1/tours", getAllTours);

// //Read one tour
// app.get("/api/v1/tours/:id", getTour);

// //CREATE
// app.post("/api/v1/tours", createTour);

// //UPDATE: patch
// app.patch("/api/v1/tours/:id", updateTour);

// //DELETE
// app.delete("/api/v1/tours/:id", deleteTour);

//can refactor the code like:
app.route("/api/v1/tours").get(getAllTours).post(createTour);

app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

const port = 3000;
app.listen(port, "127.0.0.1", () => {
  console.log(`App running on port: ${port}`);
});
