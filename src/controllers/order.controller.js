const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { orderService } = require("../services");


const createOrder = catchAsync(async (req, res) => {

    const data = await orderService.createOrder(req.body);

    res.status(201).json(
        response({
            message: "Product Added successfully",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: data,
        })
    );
});

module.exports = {
    createOrder,
};