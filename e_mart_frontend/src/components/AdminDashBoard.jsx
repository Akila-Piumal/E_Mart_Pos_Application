import React, { useState } from "react";
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

  return (
    <div className="flex">
      <div
        className={`bg-dark-purple h-screen p-5 pt-8 ${
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

      <div className="p-7 bg-dashboardColor2 w-full">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex justify-center items-center mt-8 flex-col">
          <div className="flex flex-col md:flex-row flex-wrap gap-16">
            <div className="w-60 h-32 bg-white rounded-2xl shadow-sm shadow-slate-100 flex items-center gap-5">
              <FaProductHunt
                size={40}
                className="text-dark-purple bg-dashboardColor2 rounded-full ml-4"
              />
              <div>
                <span className="text-slate-400">Products</span>
                <h1 className="font-semibold text-2xl">5</h1>
              </div>
            </div>
            <div className="w-60 h-32 bg-white rounded-2xl shadow-sm shadow-slate-100 flex items-center gap-5">
              <FaUser
                size={40}
                className="text-dark-purple bg-dashboardColor2 rounded-full ml-4"
              />
              <div>
                <span className="text-slate-400">Customers</span>
                <h1 className="font-semibold text-2xl">10</h1>
              </div>
            </div>
            <div className="w-60 h-32 bg-white rounded-2xl shadow-sm shadow-slate-100 flex items-center gap-5">
              <FaDollarSign
                size={40}
                className="text-dark-purple bg-dashboardColor2 rounded-full ml-4"
              />
              <div>
                <span className="text-slate-400">Sales</span>
                <h1 className="font-semibold text-2xl">Rs.20000</h1>
              </div>
            </div>
          </div>

          <div className="w-3/4 h-60 bg-white rounded-2xl shadow-sm shadow-slate-100 flex flex-col items-center mt-5">
            <h1>Recent Orders</h1>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
