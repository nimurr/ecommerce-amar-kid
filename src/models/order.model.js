const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: false,
    },

    userName: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    total: { type: Number, required: true },

    status: {
      type: String,
      enum: ["pending", "processing", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
