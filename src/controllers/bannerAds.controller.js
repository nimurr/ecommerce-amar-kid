const httpStatus = require("http-status");
const response = require("../config/response");
const catchAsync = require("../utils/catchAsync");
const { bannerAdsService } = require("../services");


const createBannerAd = catchAsync(async (req, res) => {
    if (req.file) {
        req.body.image = "/Image/BannerAds/" + req.file.filename;
    }
    const results = await bannerAdsService.createBannerAd({ data: req.body });
    // Logic to create a new BannerAd
    res.status(201).json(
        response({
            message: "BannerAd created successfully",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: results,
        })
    );
});

const getBannerAds = catchAsync(async (req, res) => {
    const results = await bannerAdsService.getBannerAds();
    res.status(200).json(
        response({
            message: "BannerAds retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});

const getAllBannerAds = catchAsync(async (req, res) => {
    const results = await bannerAdsService.getAllBannerAds();
    res.status(200).json(
        response({
            message: "BannerAds retrieved successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});

const updateBannerAd = catchAsync(async (req, res) => {
    const bannerAdId = req.params.id;
    const data = req.body;
    if (req.file) {
        req.body.image = "/Image/BannerAds/" + req.file.filename;
    }
    const results = await bannerAdsService.updateBannerAd({ bannerAdId, data });
    // Logic to update an existing BannerAd
    res.status(200).json(
        response({
            message: "BannerAd updated successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});

const deleteBannerAd = catchAsync(async (req, res) => {
    const bannerAdId = req.params.id;
    const results = await bannerAdsService.deleteBannerAd(bannerAdId);
    // Logic to delete an existing BannerAd
    res.status(200).json(
        response({
            message: "BannerAd deleted successfully",
            status: "OK",
            statusCode: httpStatus.OK,
            data: results,
        })
    );
});


module.exports = {
    createBannerAd,
    getBannerAds,
    getAllBannerAds,
    updateBannerAd,
    deleteBannerAd
};