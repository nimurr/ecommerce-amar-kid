const Category = require("../models/categories.model");
const ApiError = require("../utils/ApiError");


const createCategory = async (data) => {
    if (!data.name || !data.image) {
        ApiError.badRequest('Name and image are required to create a category');
    }
    const result = await Category.create(data);
    // Logic to create a category
    return result;
}

const getCategories = async () => {
    // Logic to get all categories
    const categories = await Category.find();
    if (!categories) {
        ApiError.notFound('No categories found');
    }

    return categories;
}



module.exports = {
    createCategory,
    getCategories,
};