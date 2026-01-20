const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { productService } = require("../services");


const createProduct = catchAsync(async (req, res) => {
    const data = req.body;
    if (req.file) {
        req.body.image = "/Image/Products/" + req.file.filename;
    }
    const product = await productService.createProduct(data);
    res.status(201).json(
        response({
            message: "Product Added successfully",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: product,
        })
    );
});

const getProducts = catchAsync(async (req, res) => {
    // You can implement filtering, pagination, etc. based on req.query if needed
    const products = await productService.getProducts();
    res.status(200).json(
        response({
            message: "Products retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: products,
        })
    );
});

const getProductById = catchAsync(async (req, res) => {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    res.status(200).json(
        response({
            message: "Product retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: product,
        })
    );
});

// update and delete 
const updateProduct = catchAsync(async (req, res) => {
    // Implementation for updating a product
    if (req.file) {
        req.body.image = "/Image/Products/" + req.file.filename;
    }

    const result = await productService.updateProduct(req.params.id, req.body);

    res.status(200).json(
        response({
            message: "Product updated successfully",
            status: "OK",
            statusCode: httpStatus.OK,
        })
    );
});

const deleteProduct = catchAsync(async (req, res) => {
    // Implementation for deleting a product
    const { id } = req.params;

    const result = await productService.deleteProduct(id);

    res.status(200).json(
        response({
            message: "Product deleted successfully",
            status: "OK",
            statusCode: httpStatus.OK,
        })
    );
});



module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};  