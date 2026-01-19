const axios = require("axios");
const cron = require("node-cron");
const { Product } = require("../models");  

/* -------------------------------------------------------------------------- */
/*                                CREATE PRODUCT                               */
/* -------------------------------------------------------------------------- */

const createProduct = async () => {

    return "Product created successfully";
};

/* -------------------------------------------------------------------------- */
/*                                   EXPORTS                                   */
/* -------------------------------------------------------------------------- */

module.exports = {
    createProduct
};



