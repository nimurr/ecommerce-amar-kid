// product schema definition
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, // product name
    price: { type: Number, required: true }, // product price
    discountPrice: { type: Number, default: 0 }, // discounted price
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
        required: true
    },
    inStock: { type: Boolean, default: true }, // availability status
    inStockQuantity: { type: Number, default: 0 }, // quantity in stock
    image: { type: String, required: true }, // product image
    description: { type: String, required: true }, // product description
    agvRating: { type: Number, default: 0 }, // product rating
    reviews: { type: Number, default: 0 }, // number of reviews
    promoCode: { type: String }, // promotional code
    promoCodeDiscount: { type: Number }, // promotional code discount
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false }

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;