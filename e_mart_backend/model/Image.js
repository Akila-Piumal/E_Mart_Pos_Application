const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer, // Binary data for the image
  contentType: String, // MIME type of the image (e.g., 'image/jpeg', 'image/png', etc.)
  url:String
});

module.exports = mongoose.model("Image", imageSchema);
