const httpStatus = require("http-status");
const response = require("../config/response");
const { reviewService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createReview = catchAsync(async (req, res) => {

    const results = await reviewService.createReview(req.body);
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


module.exports = {
    createReview,
};