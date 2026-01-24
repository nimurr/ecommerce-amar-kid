const { Order, Notification } = require("../models");


const createOrder = async ({ data, userId }) => {

    const { products, userName, address, phoneNumber, total, status } = data;

    if (!products || !userName || !address || !phoneNumber) {
        throw new Error('All fields are required');
    }
    const fullData = { products, userName, address, phoneNumber, total, status, userId };

    const result = await Order.create(fullData);

    const dataNotify = {
        userId: userId,
        text: `New Order placed by ${userName}`,
        disc: `User placed an order with total amount of ${total}`,
    }
    console.log(dataNotify)

    await Notification.create(dataNotify);

    return result;
}

const updateOrderStatus = async ({ orderId, data }) => {
    const result = await Order.updateOne({ _id: orderId }, { $set: data });
    return result;
}

const getOrders = async () => {
    const result = await Order.find();
    return result;
}

const getOrder = async (orderId) => {
    const result = await Order.findById(orderId);
    return result;
}


module.exports = {
    createOrder,
    updateOrderStatus,
    getOrders,
    getOrder
};