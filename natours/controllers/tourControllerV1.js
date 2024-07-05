const fs = require("fs");

const Tour = require("../models/tourModel");

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next();
};

/////CRUD////////////Routes handlers

//TOUR
//READ all
exports.getAllTours = (req, res) => {
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
exports.getTour = (req, res) => {
  // console.log(req.params);

  //convert string to a number
  const id = req.params.id * 1;

  const tour = tours.find((el) => el.id === id);

  //send error when there is no id matching the search
  if (id > tours.length) {
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
  }

  res.status(200).json({
    status: "sucess",
    data: {
      tour: tour,
    },
  });
};

//CREATE
exports.createTour = (req, res) => {
  //201 = create
  res.status(201).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });
};

//UPDATE
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: ">Updated tour here...>",
    },
  });
};

//DELETE
exports.deleteTour = (req, res) => {
  //204 = no content
  res.status(204).json({
    status: "success",
    data: null,
  });
};

/////////////CRUD///////////////Routes

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
