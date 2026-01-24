
const { Notification } = require("../models");

/* -------------------------------------------------------------------------- */
/*                            CREATE NOTIFICATION                             */
/* -------------------------------------------------------------------------- */

const createNotification = async (data) => {
    const notification = await Notification.create(data);

    return notification;
};

/* -------------------------------------------------------------------------- */
/*                             GET NOTIFICATIONS                              */
/* -------------------------------------------------------------------------- */


const getNotification = async ({ userId }) => {
    // ✅ 2. Fetch from DB
    const notifications = await Notification.find({})
        .sort({ createdAt: -1 })

    const unReadCount = await Notification.countDocuments({ status: "unread" });

    return { notifications, unReadCount };
};

/* -------------------------------------------------------------------------- */
/*                            READ ALL NOTIFICATIONS                          */
/* -------------------------------------------------------------------------- */

const readAllNotification = async ({ userId }) => {

    const notifications = await Notification.updateMany(
        { status: "read" }
    );


    return notifications
}

module.exports = {
    createNotification,
    getNotification,
    readAllNotification
};
