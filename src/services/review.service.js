const { Review } = require("../models");


const createReview = async ({ data, userId }) => {
    const reviewData = { ...data, userId };
    console.log(reviewData);

    const existingReview = await Review.findOne({
        productId: reviewData.productId,
        userId: reviewData.userId,
    });

    if (existingReview) {
        throw new Error('You have already reviewed this product');
    }

    const result = await Review.create(reviewData);
    return result;
};


const updateReview = async ({ reviewId, data }) => {

    if (data.rating && (data.rating < 1 || data.rating > 5)) {
        throw new Error('Rating must be between 1 and 5');
    }

    const updatedReview = await Review.findByIdAndUpdate(reviewId, data, { new: true });
    if (!updatedReview) {
        throw new Error('Review not found');
    }
    return updatedReview;
};


const getAllReviews = async (productId) => {
    const reviews = await Review.find({ productId: productId, }).populate('userId', 'fullName profileImage');
    if (!reviews) {
        throw new Error('No reviews found for this product');
    }

    return reviews;
}


module.exports = {
    createReview,
    updateReview,
    getAllReviews
};