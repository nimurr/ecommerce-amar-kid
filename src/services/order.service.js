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

const getOrders = async ({ status, page = 1, limit = 10 }) => {
    const query = status ? { status } : {};

    const skip = (page - 1) * limit;

    const [orders, total] = await Promise.all([
        Order.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(Number(limit))
            .populate({
                path: "products.productId",
                model: "Product",
            })
            .populate("userId"),

        Order.countDocuments(query),
    ]);

    return {
        results: orders,
        pagination: {
            total,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(total / limit),
        },
    };
};



const getOrder = async (orderId) => {
    const result = await Order.findById(orderId)
        .populate({
            path: "products.productId",
            model: "Product",
        })
        .populate("userId")
        ;
    return result;
}


module.exports = {
    createOrder,
    updateOrderStatus,
    getOrders,
    getOrder
};