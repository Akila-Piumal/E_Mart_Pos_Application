import React, { useEffect, useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { MdAddShoppingCart } from "react-icons/md";
import {
  RiDashboardFill,
  RiLogoutCircleFill,
  RiProductHuntFill,
} from "react-icons/ri";
import { FaProductHunt, FaUser, FaDollarSign } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiFillSetting } from "react-icons/ai";
import { LiaProductHunt } from "react-icons/lia";
import axios from "axios";
import AdminSubDashboard from "./AdminSubDashboard";
import Products from "./Products";

const AdminDashBoard = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard" },
    { title: "Products", icon: <FaProductHunt /> },
    { title: "Customers", icon: <FaUser /> },
    { title: "Profile", spacing: true, icon: <ImProfile /> },
    { title: "Setting", icon: <AiFillSetting /> },
    { title: "Logout", icon: <RiLogoutCircleFill /> },
  ];
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  // const [id, setId] = useState(0);

  // useEffect(() => {}, [selectedMenu]);

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen  p-5  pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />
        <div className="inline-flex">
          <MdAddShoppingCart
            className={`text-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            E-Mart
          </h1>
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white mt-6 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />

          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white ${
                  selectedMenu == menu.title ? "bg-light-white" : "bg-none"
                }   rounded-md  ${menu.spacing ? "mt-9" : "mt-2"}  `}
                onClick={() => setSelectedMenu(menu.title)}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>

      {selectedMenu === "Dashboard" ? <AdminSubDashboard /> : <></>}
      {selectedMenu === "Products" ? <Products/> : <></>}
      {selectedMenu === "Customers" ? <h1>Customers</h1> : <></>}
      {selectedMenu === "Profile" ? <h1>Profile</h1> : <></>}
      {selectedMenu === "Setting" ? <h1>Setting</h1> : <></>}
      {selectedMenu === "Logout" ? <h1>Logout</h1> : <></>}
    </div>
  );
};

export default AdminDashBoard;
