const express = require("express");
const router = express.Router();
const multer = require("multer");
const app = express();

const Image = require("../model/Image");
const product = require("../model/product");

// Set up Multer to handle file uploads
const upload = multer({ storage: multer.memoryStorage() });

app.post("/upload", upload.single("image"), (req, res) => {
  const { originalname, buffer, mimetype } = req.file;

  const newImage = new Image({
    name: originalname,
    data: buffer,
    contentType: mimetype,
  });

  newImage
    .save()
    .then((response) => {
      if (response != null) {
        res.status(200).json({ message: "image saved" , data: response});
        // res
        //   .status(200)
        //   .json({
        //     message: "image saved",
        //     data: response.data.toString("base64"),
        //     contentType: response.data.contentType,
        //   });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "image save failed!" });
    });
});

app.get("/getImage/:id", async (req, res) => {
  const imageId = req.params.id;

  try {

    const image = await Image.findById(imageId);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    const base64Data = image.data.toString("base64");

    const dataUrl = `data:${image.contentType};base64,${base64Data}`;

    res.status(201).json({ dataUrl });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = app;
