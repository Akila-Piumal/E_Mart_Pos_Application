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


const deleteProduct = (req, res) => {
  const productId = req.params.productId;

  Product.findOneAndDelete({_id:productId})
    .then((deletedProduct) => {
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found.' });
      }
      res.status(200).json({ message: `Product has been deleted successfully.`, deletedProduct });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting the product.' });
    });
};

const updateProduct = (req, res) => {
  const productId = req.params.productId;
  const updatedProduct = req.body;

  Product.findByIdAndUpdate(productId, updatedProduct, { new: true })
    .then((product) => {
      res.status(200).json({message:"updated.",product});
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error updating product' });
    });
}

module.exports = { getProduct, saveProduct, getAll, deleteProduct, updateProduct };
