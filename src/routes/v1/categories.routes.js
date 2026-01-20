const express = require('express');
const router = express.Router();

const { categoriesController } = require('../../controllers');

const UPLOADS_FOLDER_USERS = "./public/Image/categories";
const userFileUploadMiddleware = require("../../middlewares/fileUpload");
const uploadUsers = userFileUploadMiddleware(UPLOADS_FOLDER_USERS);
const convertHeicToPngMiddleware = require('../../middlewares/converter');
const auth = require('../../middlewares/auth');



router.post('/',
    auth('admin'),
    [uploadUsers.single("image")],
    convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS),
    categoriesController.createCategory)

router.get('/', categoriesController.getCategories);

// edit category
router.patch('/:id',
    auth('admin'),
    [uploadUsers.single("image")],
    convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS),
    categoriesController.updateCategory);

router.delete('/:id',
    auth('admin'),
    categoriesController.deleteCategory);






module.exports = router;