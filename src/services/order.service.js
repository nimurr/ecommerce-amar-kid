const { Order } = require("../models");


const createOrder = async ({ data, userId }) => {
    console.log(data)
    const { products, userName, address, phoneNumber, total, status } = data;

    if (!products || !userName || !address || !phoneNumber) {
        throw new Error('All fields are required');
    }
    const fullData = { products, userName, address, phoneNumber, total, status , userId };

    const result = await Order.create(fullData);
    return result;
}

module.exports = {
    createOrder,
};