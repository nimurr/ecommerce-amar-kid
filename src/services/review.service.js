const { Review, Notification } = require("../models");


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
    
    const notifyData = {
        userId: userId,
        text: `You have a new review for in a Product`,
        disc: `User placed an a new review for ${reviewData.productId}`,
    }
    await Notification.create(notifyData);

    return result;
};


const updateReview = async ({ reviewId }) => {

    if (data.rating && (data.rating < 1 || data.rating > 5)) {
        throw new Error('Rating must be between 1 and 5');
    }
    // update isAdminApproved field only
    const updatedReview = await Review.findByIdAndUpdate(reviewId, { isAdminApproved: true }, { new: true });
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