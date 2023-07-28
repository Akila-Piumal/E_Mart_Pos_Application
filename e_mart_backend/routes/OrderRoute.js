const express = require("express");
const router = express.Router();
const placeOrderController = require("../controllers/placeOrderController");

router.route("/placeOrder")
    .post(placeOrderController.placeOrder);

module.exports = router;
