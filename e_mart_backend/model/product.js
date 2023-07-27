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
  category:{
      type:String,
      required:true
  },
  description:{
      type:String,
      required:true
  },
  availability: {
    type: Boolean,
    default:true
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  imageUrl:{
    type:String
  }
});

module.exports = mongoose.model("product", productSchema);

