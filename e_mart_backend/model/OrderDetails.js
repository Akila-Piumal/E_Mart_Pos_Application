const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required:true
  },
  quantity:{
    type:Number,
    required:true
  },
  total:{
    type:Number,
    required:true
  }
});

module.exports = mongoose.model("orderDetail",OrderDetailsSchema)
