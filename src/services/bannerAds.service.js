const { BannerAd } = require("../models");


const createBannerAd = async ({ data }) => {
    const results = await BannerAd.create(data);
    return results;
}

const getBannerAds = async () => {
    const results = await BannerAd.find({ active: true });
    return results;
}

const getAllBannerAds = async () => {
    const results = await BannerAd.find();
    return results;
}
const updateBannerAd = async ({ bannerAdId, data }) => {
    //only update status and active of is active then if true set active to false else set active to true
    const results = await BannerAd.findByIdAndUpdate(bannerAdId, data, { new: true });
    return results;
}

const deleteBannerAd = async (bannerAdId) => {
    const results = await BannerAd.findByIdAndDelete(bannerAdId);
    return results;
}
module.exports = {
    createBannerAd,
    getBannerAds,
    getAllBannerAds,
    updateBannerAd,
    deleteBannerAd
}