const express = require('express');
const router = express.Router();

const { categoriesController } = require('../../controllers');

const UPLOADS_FOLDER_USERS = "./public/Image/categories";
const uploadUsers = userFileUploadMiddleware(UPLOADS_FOLDER_USERS);
const convertHeicToPngMiddleware = require('../../middlewares/converter');



router.post('/',
    [uploadUsers.single("image")],
    convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS),
    categoriesController.createCategory)




module.exports = router;