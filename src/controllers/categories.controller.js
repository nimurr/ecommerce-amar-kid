const httpStatus = require("http-status");
const response = require("../config/response");
const { categoriesService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createCategory = catchAsync(async (req, res) => {
    const data = req.body;

    if (req.file) {
        data.image = "/Image/categories/" + req.file.filename;
    }

    const result = await categoriesService.createCategory(data);

    res.status(httpStatus.OK).json(
        response({
            message: "Category created",
            status: "OK",
            statusCode: httpStatus.OK,
            data: result,
        })
    );

});

const getCategories = catchAsync(async (req, res) => {

    const categories = await categoriesService.getCategories();

    res.status(httpStatus.OK).json(
        response({
            message: "Categories fetched successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: categories,
        })
    );
});

const updateCategory = catchAsync(async (req, res) => {
    const categoryId = req.params.id;
    const data = req.body;
    if (req.file) {
        data.image = "/Image/categories/" + req.file.filename;
    }
    const result = await categoriesService.updateCategory(categoryId, data);
    res.status(httpStatus.OK).json(
        response({
            message: "Category updated",
            status: "OK",
            statusCode: httpStatus.OK,
            data: result,
        })
    );
});

const deleteCategory = catchAsync(async (req, res) => {
    const categoryId = req.params.id;
    await categoriesService.deleteCategory(categoryId);
    res.status(httpStatus.OK).json(
        response({
            message: "Category deleted",
            status: "OK",
            statusCode: httpStatus.OK,
            data: {},
        })
    );
});


module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
};