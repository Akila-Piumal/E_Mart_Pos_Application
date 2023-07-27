import React, { useEffect, useState } from "react";
import MyNavbar from "./MyNavbar";
import Slider from "./Slider";
import Category from "./Category";
import SuperDeals from "./SuperDeals";
import axios from "axios";
import ImageUpoad from "./ImageUpoad";
import AllProducts from "./AllProducts";
import { useStateContext } from "../context/StateContext";
import { toast } from 'react-hot-toast';

const searchItem = (e) => {
  e.preventDefault();
  alert("Searching");
};

const DashBoard = () => {
  const user = JSON.stringify(localStorage.getItem("user"));

  const { onAdd,cartItems } = useStateContext();

  const setCartItemstoArray = (product) => {
    onAdd(product);
   
  }

  return (
    <>
      <MyNavbar user={user} cartItems={cartItems}/>

      {/* Search Bar */}
      <div className="flex justify-center ">
        <div className="mt-5">
          <form onSubmit={searchItem}>
            <div class="relative text-gray-600 focus-within:text-gray-400">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  class="p-1 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                class="py-2 text-sm text-white bg-searchBar rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 w-72 md:w-96 lg:w-656"
                placeholder="Search..."
                autocomplete="off"
              ></input>
            </div>
          </form>
        </div>
      </div>

      {/* Categories and slideer*/}
      <div id="" className="bg-white mt-5 flex gap-4">
        <Category />

        <Slider />
      </div>

      <SuperDeals />

      <AllProducts  setCartItemstoArray={setCartItemstoArray} />

      {/* <ImageUpoad/> */}
    </>
  );
};

export default DashBoard;
