const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
    default: 0,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  availability: {
    type: String,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
});

module.exports = mongoose.model("product", productSchema);
