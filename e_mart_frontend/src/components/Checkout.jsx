import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { TiCreditCard } from "react-icons/ti";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [showAddress, setShowAddress] = useState(true);
  const [showMasssage, setShowMasssage] = useState(false);

  const navigate = useNavigate();

  var totalFull = 0;

  const setAddressDetails = () => {
    const shippingAddress = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      address: address,
      city: city,
      province: province,
      postalCode: postalCode,
    };

    localStorage.setItem("address", JSON.stringify(shippingAddress));

    setShowAddress(false);
  };

  const purchaseOrder = () => {
    alert(totalFull);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {showAddress ? (
        <div className="flex flex-col items-center bg-homeBaground rounded-xl shadow-lg w-4/5">
          <h1 className="text-2xl font-semibold text-darkGray">Checkout</h1>
          <div className="flex items-center mb-8">
            <TiTick size={30} className="text-blue1" />
            <h3>Shipping address</h3>
            <hr class="w-96 h-0.5 mx-6 my-1 border-0 rounded dark:bg-gray-300" />
            <TiTick size={30} className="text-darkGray" />
            <h3>Payment Details</h3>
          </div>

          <div className="border-b border-gray-900/10 pb-12 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Personal Information
            </h2>
            <p className=" text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Ex : name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Sri Lanka</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-4/5 justify-between">
            <button
              type="button"
              onClick={() => navigate("/cart")}
              className="mt-5 bg-BlueSet1 font-semibold rounded-lg text-white py-2 px-5 mb-3"
            >
              Back To Cart
            </button>

            <button
              type="button"
              onClick={() => setAddressDetails()}
              className="mt-5 bg-BlueSet7 font-semibold rounded-lg text-white py-2 px-5 mb-3"
            >
              NEXT
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-homeBaground rounded-xl shadow-lg w-4/5 ">
          <h1 className="text-2xl font-semibold text-darkGray">Checkout</h1>
          <div className="flex items-center mb-5">
            <TiTick size={30} className="text-blue1" />
            <h3>Shipping address</h3>
            <hr class="w-96 h-0.5 mx-6 my-1 border-0 rounded dark:bg-gray-300" />
            <TiTick size={30} className="text-blue1" />
            <h3>Payment Details</h3>
          </div>

          <div className="border-b border-gray-900/10 pb-7 w-3/5 ">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Order Summary
            </h2>

            <div className="flex flex-col mt-3">
              {JSON.parse(localStorage.getItem("orderDetails")).map((item) => (
                <div className="mb-3">
                  <h3 className="text-lg font-medium">{item.item.name}</h3>
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <h3>Quantity:</h3>
                      <h3>{item.quantity}</h3>
                    </div>
                    <div className="hidden">
                    {(totalFull = totalFull + item.total)}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{item.total}</h3>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Total</h3>
                <div className="flex ">
                  <h3 className="text-xl font-semibold">RS.</h3>
                  <h3 className="text-xl font-semibold">{totalFull}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-5 mt-3 w-3/5">
            <div className="flex gap-2 items-center">
              <div>
                <TiCreditCard size={30} />
              </div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Payment Method
              </h2>
            </div>
            <div className=" grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="  Card Number"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="cardHolderName"
                    id="cardHolderName"
                    placeholder="  Cardholder Name"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2">
                  <select
                    id="month"
                    name="month"
                    placeholder="MM"
                    // value={country}
                    // onChange={(e) => setCountry(e.target.value)}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>MM</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2">
                  <select
                    id="year"
                    name="year"
                    placeholder="YY"
                    // value={country}
                    // onChange={(e) => setCountry(e.target.value)}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>YY</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                    <option>2033</option>
                    <option>2034</option>
                    <option>2035</option>
                    <option>2036</option>
                    <option>2037</option>
                    <option>2038</option>
                    <option>2039</option>
                    <option>2040</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="mt-2">
                  <input
                    type="number"
                    name="CVV"
                    id="CVV"
                    placeholder="  CVV"
                    // value={province}
                    // onChange={(e) => setProvince(e.target.value)}
                    className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-4/5 justify-between">
            <button
              type="button"
              onClick={() => setShowAddress(true)}
              className="mt-5 bg-BlueSet1 font-semibold rounded-lg text-white py-2 px-5 mb-3"
            >
              Back
            </button>

            <button
              type="button"
              onClick={() => purchaseOrder()}
              className="mt-5 bg-BlueSet7 font-semibold rounded-lg text-white py-2 px-7 mb-3"
            >
              {"PAY  RS." + totalFull}
            </button>
          </div>
        </div>
      )}

      
    </div>
    
  );
};

export default Checkout;
