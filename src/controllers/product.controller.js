const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { productService } = require("../services");


const createProduct = catchAsync(async (req, res) => {

    // if () {
    //     return res.status(httpStatus.BAD_REQUEST).json(
    //         response({
    //             message: "Product URL is required",
    //             status: "BAD_REQUEST",
    //             statusCode: httpStatus.BAD_REQUEST,
    //         })
    //     );
    // }
    const product = await productService.createProduct();
    res.status(201).json(
        response({
            message: "Product Added successfully",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: product,
        })
    );
});




module.exports = {
    createProduct,
 
};  