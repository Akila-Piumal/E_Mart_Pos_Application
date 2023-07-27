import React, { useEffect, useState } from "react";
import MyNavbar from "./MyNavbar";
import { useStateContext } from "../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const user = JSON.stringify(localStorage.getItem("user"));

  const { onRemove, cartItems } = useStateContext();

  console.log(cartItems);

  const navigate = useNavigate();

  const [purchaseDetails, setPurchaseDetails] = useState([]);

  function updateTotal(selectedQuantity, itemPrice, discount, id, item) {
    const quantity = parseInt(selectedQuantity, 10);

    const total = quantity * itemPrice;

    var itemTotalOld = parseFloat(
      document.getElementById("total" + id).textContent
    );

    var difference = total - itemTotalOld;

    var fullTotalOld = parseFloat(
      document.getElementById("fullTotal").textContent
    );

    // Update the total in the <h3> element
    document.getElementById("total" + id).textContent = `${total} `;

    document.getElementById("fullTotal").textContent = `${
      fullTotalOld + difference
    } `;
  }

  useEffect(() => {
    let total = 0;

    cartItems.map((item) => {
      total += item.price;
    });
    cartItems.length >= 1 &&
      (document.getElementById("fullTotal").textContent = `${total}`);
  }, []);

  // Remove from cart
  const removeItem = (item) => {
    const oldTotal = parseFloat(
      document.getElementById("total" + item._id).textContent
    );

    var fullTotalOld = parseFloat(
      document.getElementById("fullTotal").textContent
    );

    onRemove(item);

    document.getElementById("fullTotal").textContent = `${
      fullTotalOld - oldTotal
    } `;
  };

  const setOrderDetails = () => {
    const orderDetailsArray = [];

    cartItems.map((item) => {
      var quantity = parseInt(
        document.getElementById("quantity" + item._id).value
      );

      var total = parseInt(
        document.getElementById("total" + item._id).textContent
      );

      const orderDetail = {
        item: item,
        quantity: quantity,
        total:total
      };

      orderDetailsArray.push(orderDetail)

    });

    localStorage.setItem("orderDetails",JSON.stringify(orderDetailsArray))

    navigate('/checkout')
  };

  return (
    <div>
      <MyNavbar user={user} cartItems={cartItems} />

      <div>
        <div className="flex flex-col items-center bg-laBlue mx-24 text-black rounded py-3 mt-8 ">
          <h2>
            Total Cart Products{" "}
            <span className="text-black font-semibold">
              ({cartItems.length})
            </span>
          </h2>
        </div>

        <div>
          {cartItems.length < 1 && (
            <div className="flex flex-col items-center mt-20">
              <AiOutlineShopping size={150} className="text-Orange1" />
              <h3 className="font-bold text-xl">Your shopping bag is empty!</h3>

              <button
                type="button"
                onClick={() => navigate("/dashboard")}
                className="mt-5 bg-OrangeSet1 font-semibold rounded-lg text-white p-3"
              >
                Continue Shopping
              </button>
            </div>
          )}

          <div className="flex flex-col items-center">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center bg-homeBaground mt-6 rounded-xl shadow-lg w-4/5 justify-around"
                >
                  <img
                    src={item.imageUrl}
                    alt="image"
                    className="h-150 w-150 ml-20"
                  />

                  <h3 className=" font-semibold w-350">{item.name}</h3>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="quantity"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Quantity
                    </label>
                    <div className="mt-2">
                      <select
                        id={`quantity` + item._id}
                        name="quantity"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        onChange={(e) =>
                          updateTotal(
                            e.target.value,
                            item.price,
                            item.discount,
                            item._id,
                            item
                          )
                        }
                      >
                        {Array.from(
                          { length: item.quantity },
                          (_, index) => index + 1
                        ).map((number) => (
                          <option key={number}>{number}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="itemTotal"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total
                    </label>
                    <div className="mt-2">
                      <h3 id={`total` + item._id}>{item.price * 1}</h3>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="remove-item"
                    // onClick={() => onRemove(item)}
                    onClick={() => removeItem(item)}
                  >
                    <TiDeleteOutline size={25} className="text-Orange1" />
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div>
          {cartItems.length >= 1 && (
            <div>
              <div className="flex justify-end mr-20 mt-12">
                <label
                  htmlFor="itemTotal"
                  className="block text-xl leading-6 text-gray-500 mr-5"
                >
                  TOTAL
                </label>
                <h1 className="font-semibold text-lg mr-1">RS.</h1>
                <h1 id="fullTotal" className="font-semibold text-lg "></h1>
              </div>
              <hr />
              <div className="mx-60 flex justify-between mb-12 mt-12">
                <button
                  type="button"
                  onClick={() => navigate("/dashboard")}
                  className="mt-5 bg-OrangeSet1 font-semibold rounded-lg text-white p-3"
                >
                  CONTINUE TO SHOPPING
                </button>

                <button
                  type="button"
                  onClick={() => setOrderDetails()}
                  className="mt-5 bg-Green2Set2 font-semibold rounded-lg text-white p-3"
                >
                  CHECKOUT
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
