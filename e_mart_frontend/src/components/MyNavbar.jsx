import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from "../assets/image2.png";
import cart from "../assets/cart.png";

const navigation = [
  { name: "Home", href: "#", current: true , hide:false},
  { name: "Contact", href: "#", current: false, hide:false},
  { name: "About", href: "#", current: false, hide:false },
  { name: "Login", href: "#", current: false , hide:true},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const MyNavbar = (props) => {
  const navigate = useNavigate();

  localStorage.setItem("cartItems",JSON.stringify(props.cartItems))

  return (
    <>
      {/* Nav Bar */}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {/* {
                        props.user ? alert("innawaa"):alert("na")
                      } */}
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            // hide the login from navbar when user logged in
                            props.user ? (!item.hide ? "visible":"invisible"):(!item.hide ? "visible":"visible"),
                
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => {
                            item.name === "Login"
                              ?  navigate('/login')
                              : alert("Login newe");
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="relative ml-3">
                    <button
                      className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      onClick={() => {
                        props.user
                          ? navigate('/cart')
                          : navigate('/login')
                      }}
                    >
                      <img className="h-8 w-8 rounded-full" src={cart} alt="" />
                      <span id="cartCount">{props.cartItems ? props.cartItems.length:0}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Model */}

      {/* <Model
        className="w-[600px]"
        isVisible={showModel}
        onClose={() => setShowModel(false)}
      >
        {loginSignupChange ? (
          //Login Model
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-2xl font-medium text-gray-900 text-center font-black">
              Login
            </h3>
            <form className="space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  placeholder="Ex : name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*********"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label
                    for="remember"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-700 hover:underline">
                  Forget Password
                </a>
              </div>
              <div className="flex justify- flex-col items-center ">
                <button
                  type="submit"
                  className="w-56 lg:w-72 text-white bg-BlueSet1 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>

                <h3 className="mt-3 font-bold">or</h3>

                <button
                  type="button"
                  className="mt-3 w-56 lg:w-72 text-white bg-Green2Set2 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    setLoginSignupChange(false);
                  }}
                >
                  Registration
                </button>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="shadow-xl" rounded>
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                    onClick={login}
                  >
                    <FcGoogle className="mr-4" /> Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          // Sign Up Model
          <div className="py-6 px-6 lg:px-8 text-left">
            <h3 className="mb-4 text-2xl font-medium text-gray-900 text-center font-black">
              Register
            </h3>
            <form
              className="space-y-2"
              action="#"
              id="signUpForm"
              onSubmit={handleOnSubmit}
            >
              <div>
                <label
                  for="userName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  placeholder=""
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="address"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="emailInSignUp"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="signUpEmail"
                  id="signUpEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  placeholder="Ex : name@example.com"
                  required
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="contactNo"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Contact No
                </label>
                <input
                  type="number"
                  name="contactNo"
                  id="contactNo"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 black w-full p-2.5"
                  required
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="passwordInSignup"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="signupPassword"
                  id="signupPassword"
                  placeholder="*********"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>

              <div className="flex justify- flex-col items-center ">
                <button
                  type="submit"
                  className="w-56 lg:w-72 text-white bg-BlueSet1 hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </button>

                <h3 className="mt-3 font-bold">or</h3>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="shadow-xl" rounded>
                  <button
                    type="button"
                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  >
                    <FcGoogle className="mr-4" /> Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </Model> */}
    </>
  );
}

export default MyNavbar;
