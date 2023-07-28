const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  orderDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "orderDetail" }],

  totalAmount: {
    type: Number,
    required: true,
  },

  shippingAddress:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "address",
    required: true,
  }
});

module.exports = mongoose.model("order", orderSchema);
