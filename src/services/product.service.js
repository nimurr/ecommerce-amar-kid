const { Product } = require("../models");



const createProduct = async (data) => {
    const results = await Product.create(data);
    return results;
};

const getProducts = async () => {
    const results = await Product.find({ isDeleted: false, isActive: true }).populate('categoryId', 'name');
    if (!results) {
        throw new Error('No products found');
    }
    return results;
};

const getProductById = async (productId) => {
    const product = await Product.findOne({
        _id: productId,
        isDeleted: false,
        isActive: true
    }).populate('categoryId', 'name');

    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const updateProduct = async (productId, data) => {
    const product = await Product.findByIdAndUpdate(productId, data, { new: true });
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const deleteProduct = async (productId) => {
    const product = await Product.findByIdAndUpdate(productId, { isDeleted: true }, { new: true });
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}


module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};



