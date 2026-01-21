const { Review } = require("../models");



const createReview = async (reviewData) => {
    const result = await Review.create(reviewData);
    // Logic to save reviewData to the database
    return result;
}


module.exports = {
    createReview,
};