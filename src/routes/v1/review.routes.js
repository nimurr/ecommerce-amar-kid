const express = require("express");
const { reviewController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const router = express.Router();



router.post("/", auth("user"), reviewController.createReview);
router.patch("/:id", auth("admin"), reviewController.updateReview);
router.get("/:id", reviewController.getAllReviews);

router.get('/all-review/admin', auth('admin'), reviewController.getAllReviewsAdmin);




module.exports = router;