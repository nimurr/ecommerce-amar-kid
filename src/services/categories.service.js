const Category = require("../models/categories.model");
const ApiError = require("../utils/ApiError");


const createCategory = async (data) => {
    if (!data.name || !data.image) {
        throw new ApiError(400, 'Name and image are required to create a category');
    }


    const result = await Category.create(data);
    // Logic to create a category
    return result;
}

const getCategories = async () => {
    // Logic to get all categories
    const categories = await Category.find();
    if (!categories) {
        throw new ApiError(404, 'No categories found');
    }

    return categories;
}

const updateCategory = async (categoryId, data) => {
    const category = await Category.findByIdAndUpdate(categoryId, data, { new: true });
    if (!category) {
        throw new ApiError(404, 'Category not found');
    }
    return category;
}

const deleteCategory = async (categoryId) => {
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
        throw new ApiError(404, 'Category not found');
    }
    return category;
}




module.exports = {
    createCategory,
    getCategories,
    updateCategory,
    deleteCategory,
};