const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { orderService } = require("../services");


const createOrder = catchAsync(async (req, res) => {
    const user = req.user;

    const data = await orderService.createOrder({ data: req.body, userId: user ? user._id : null });

    res.status(201).json(
        response({
            message: "Product Added successfully",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: data,
        })
    );
});

const updateOrderStatus = catchAsync(async (req, res) => {
    const orderId = req.params.id;
    const data = req.body;
    const results = await orderService.updateOrderStatus({ orderId, data });
    // Logic to update an existing BannerAd
    res.status(200).json(
        response({
            message: "BannerAd updated successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: {},
        })
    );
});

const getOrders = catchAsync(async (req, res) => {
    const status = req.query.status;
    const page = req.query.page;
    const limit = req.query.limit;
    const results = await orderService.getOrders({ status, page, limit });
    res.status(200).json(
        response({
            message: "Orders retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});

const getOrder = catchAsync(async (req, res) => {
    const orderId = req.params.id;
    const results = await orderService.getOrder(orderId);
    res.status(200).json(
        response({
            message: "Order retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});

module.exports = {
    createOrder,
    updateOrderStatus,
    getOrders,
    getOrder
};