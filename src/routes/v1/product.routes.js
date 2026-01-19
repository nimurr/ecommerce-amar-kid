const express = require("express");
const { productController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const router = express.Router();

// Create a new product
router.post("/",
    auth("user"),
    productController.createProduct);


module.exports = router;