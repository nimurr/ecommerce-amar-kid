const httpStatus = require("http-status");
const response = require("../config/response");
const { reviewService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createReview = catchAsync(async (req, res) => {
    const userId = req.user.id;


    const results = await reviewService.createReview({ data: req.body, userId });
    // Logic to create a new review
    res.status(201).json(
        response({
            message: "Review created successfully",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: results,
        })
    );
});

const updateReview = catchAsync(async (req, res) => {

    const reviewId = req.params.id;
    const data = req.body;
    const results = await reviewService.updateReview({ reviewId, data });

    // Logic to update an existing review
    res.status(200).json(
        response({
            message: "Review updated successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: {},
        })
    );
})


// getAllReviews using productId 

const getAllReviews = catchAsync(async (req, res) => {

    const productId = req.params.id;
    const results = await reviewService.getAllReviews(productId);
    res.status(200).json(
        response({
            message: "Reviews retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});


module.exports = {
    createReview,
    updateReview,
    getAllReviews
};