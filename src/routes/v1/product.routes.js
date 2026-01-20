const express = require("express");
const router = express.Router();
const { productController } = require("../../controllers");
const auth = require("../../middlewares/auth");

const UPLOADS_FOLDER_USERS = "./public/Image/Products";
const userFileUploadMiddleware = require("../../middlewares/fileUpload");
const uploadUsers = userFileUploadMiddleware(UPLOADS_FOLDER_USERS);
const convertHeicToPngMiddleware = require('../../middlewares/converter');



router.post("/",
    auth("admin"),
    [uploadUsers.single("image")],
    convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS),
    productController.createProduct);

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

// update and delete 

router.patch("/:id",
    auth("admin"),
    [uploadUsers.single("image")],
    convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS),
    productController.updateProduct
);

router.delete("/:id",
    auth("admin"),
    productController.deleteProduct
);




module.exports = router;