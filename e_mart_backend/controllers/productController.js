const Product = require("../model/product");
const Image = require("../model/Image");
const { response } = require("../routes/imageRoute");

// Save Product
const saveProduct = (req, res) => {
  // Product Data
  const productData = JSON.parse(req.body.productData);

  // Image Data
  const { originalname, buffer, mimetype } = req.file;

  const base64Data = buffer.toString("base64");

  const dataUrl = `data:${mimetype};base64,${base64Data}`;

  // image Model
  const imageModel = new Image({
    name: originalname,
    data: buffer,
    contentType: mimetype,
    url:dataUrl
  });

  // Product Model
  const productModel = new Product({
    name: productData.name,
    price: productData.price,
    discount: productData.discount,
    quantity: productData.quantity,
    category: productData.category,
    description: productData.description,
    availability: productData.availability,
    image: "",
    imageUrl:dataUrl,
  });

  imageModel
    .save()
    .then((response) => {
      if (response != null) {
        productModel.image = response._id;
        productModel
          .save()
          .then(() => {
            res.status(201).json({ message: "product saved" });
          })
          .catch((err) => {
            console.log(err.message);
            res.status(500).json({ message: "product save failed!" });
          });
      }
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ message: "image save failed!" });
    });
};

const getAll = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "error" });
  }
};

const getProduct = (req, res) => {};

module.exports = { getProduct, saveProduct, getAll };
