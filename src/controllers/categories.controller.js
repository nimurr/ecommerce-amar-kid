const response = require("../config/response");
const { categoriesService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const createCategory = catchAsync(async (req, res) => {
    const data = req.body;

    const result = await categoriesService.createCategory(data);

    res.status(201).json({ message: 'Category created' });
});

const getCategories = catchAsync(async () => {
    // Logic to get all categories
    res.status(200).json({ categories: [] });
});


module.exports = {
    createCategory,
    getCategories,
};