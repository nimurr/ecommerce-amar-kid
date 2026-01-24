const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: false
    },
    status: {
        type: String,
        enum: ['unread', 'read'],
        default: 'unread'
    },
    text: {
        type: String,
        required: true
    },
    disc: {
        type: String,
        required: false,
        default: null
    },

    sendBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    transactionId: {
        type: String,
        required: false,
        default: null
    },

    type: {
        type: String,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
},
    {
        timestamps: true
    });

module.exports = mongoose.model("Notification", notificationSchema);
