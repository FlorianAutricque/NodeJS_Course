const Tour = require("../models/tourModel");

/////CRUD//////

//TOUR
//READ all
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours: tours,
    // },
  });
};

//READ one
exports.getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
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
