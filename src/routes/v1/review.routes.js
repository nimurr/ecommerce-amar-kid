const express = require("express");
const { reviewController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const router = express.Router();



router.post("/", auth("user"), reviewController.createReview);
router.patch("/:id", auth("admin"), reviewController.updateReview);
router.get("/:id", reviewController.getAllReviews);





module.exports = router;