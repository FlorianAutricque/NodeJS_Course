const Review = require("../models/reviewModel");
// const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");

//READ ALL REVIEWS

exports.setTourUserIds = (req, res, next) => {
  //Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

//CREATE REVIEW
exports.createReview = factory.createOne(Review);

//DELETE REVIEW
exports.deleteReview = factory.deleteOne(Review);

//UPDATE REVIEW
exports.updateReview = factory.updateOne(Review);

//GET REVIEW
exports.getReview = factory.getOne(Review);

//GET ALL REVIEWS
exports.getAllReviews = factory.getAll(Review);
