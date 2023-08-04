const orderDetail = require("../model/OrderDetails");
const order = require("../model/Order");
const address = require("../model/Address");

const placeOrder = async (req, res) => {
  const orderDetailsArray = req.body.orderDetails;

  let orderDetailsIdArray = [];

  const setIdsToArray = (id) => {
    orderDetailsIdArray.push(id);
  };

  await Promise.all(
    orderDetailsArray.map(async (detail) => {
      const orderDetails = new orderDetail({
        product: detail.item._id,
        quantity: detail.quantity,
        total: detail.total,
      });

      try {
        const savedOrderDetail = await orderDetails.save();
        setIdsToArray(savedOrderDetail._id);
      } catch (error) {
        console.error("Error saving order detail:", error);
      }
    })
  );

  const addressObj = req.body.shippingAddress;

  const shippingAddress = new address({
    address: addressObj.address,
    city: addressObj.city,
    country: addressObj.country,
    email: addressObj.email,
    firstName: addressObj.firstName,
    lastName: addressObj.lastName,
    postalCode: addressObj.postalCode,
    province: addressObj.province,
  });

  const Order = new order({
    customer: req.body.user._id,
    orderDetails: orderDetailsIdArray,
    totalAmount: req.body.totalAmount,
    shippingAddress: req.body.shippingAddress,
  });

  try {
    const savedAddress = await shippingAddress.save();
    Order.shippingAddress = savedAddress._id;

    Order.save()
      .then((order) => {
        res.status(201).json({ message: "Order Placed.", data: order });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(500).json({ message: "Order Place failed!" });
      });
  } catch (error) {
    console.error("Error saving order detail:", error);
  }
};

const getLatestOrders = (req, res) => {
  console.log("mekata awaa");
  
  order
    .find({})
    .sort({ date: -1 })
    .limit(10)
    .exec()
      .then(result => {
        console.log("Last 10 orders:");
        console.log(result);
        res.status(201).json({data:result})
      })
      .catch(err => {
        console.error("Error fetching orders:", err);
      })
};

const getAllOrders = (req, res) => {};

module.exports = { placeOrder, getLatestOrders, getAllOrders };
