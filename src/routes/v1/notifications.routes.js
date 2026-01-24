const express = require("express");
const { notificationController } = require("../../controllers");
const auth = require("../../middlewares/auth");
const router = express.Router();

router.post("/", auth("user"), notificationController.createNotification);
router.get("/all", auth("admin"), notificationController.getNotification);
router.patch('/read-all', auth('admin'), notificationController.readAllNotification);


module.exports = router;