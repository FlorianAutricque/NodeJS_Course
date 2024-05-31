const Tour = require("../models/tourModel");

/////CRUD//////

//TOUR
//READ all
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours: tours,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//READ one
exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

//CREATE
exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent",
    });
  }
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
