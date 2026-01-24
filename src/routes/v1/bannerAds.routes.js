// bannerAds.routes.js
const express = require('express');
const router = express.Router();

const UPLOADS_FOLDER_USERS = "./public/Image/BannerAds";
const userFileUploadMiddleware = require("../../middlewares/fileUpload");
const uploadUsers = userFileUploadMiddleware(UPLOADS_FOLDER_USERS);
const convertHeicToPngMiddleware = require('../../middlewares/converter');
const { bannerAdsController } = require('../../controllers');
const auth = require('../../middlewares/auth');



router.post('/',
    auth('admin'),
    [uploadUsers.single("image")],
    convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS),
    bannerAdsController.createBannerAd
);
router.get('/', bannerAdsController.getBannerAds);
router.get('/all-for-admin', auth('admin'), bannerAdsController.getAllBannerAds);
router.patch('/:id', auth('admin'), [uploadUsers.single("image")], convertHeicToPngMiddleware(UPLOADS_FOLDER_USERS), bannerAdsController.updateBannerAd);
router.delete('/:id', auth('admin'), bannerAdsController.deleteBannerAd);




module.exports = router;