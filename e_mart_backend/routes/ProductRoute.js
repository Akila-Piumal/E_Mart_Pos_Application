const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");
const bodyParser = require("body-parser");

// Set up Multer to handle file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Custom middleware to handle JSON data
router.use(bodyParser.json());

router.route("/getProduct/:id").get(productController.getProduct);

router.route("/products").get(productController.getAll);

router.post(
  "/saveProduct",
  upload.single("file"),
  productController.saveProduct
);

router.route("/products/:productId").delete(productController.deleteProduct);

module.exports = router;
