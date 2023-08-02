const express = require("express");
const router = express.Router();
const placeOrderController = require("../controllers/placeOrderController");

router.route("/placeOrder")
    .post(placeOrderController.placeOrder);

router.get('/orders/latest',placeOrderController.getLatestOrders)

router.get('/orders',placeOrderController.getAllOrders)

module.exports = router;
