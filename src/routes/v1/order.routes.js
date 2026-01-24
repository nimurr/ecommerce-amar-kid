const express = require("express");
const { orderController } = require("../../controllers");
const router = express.Router();


router.post("/", orderController.createOrder);

// order stutas update
router.patch("/:id", orderController.updateOrderStatus);

router.get("/", orderController.getOrders);
router.get("/:id", orderController.getOrder);


module.exports = router;