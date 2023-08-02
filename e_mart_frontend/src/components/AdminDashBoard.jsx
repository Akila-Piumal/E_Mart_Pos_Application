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

const AdminDashBoard = () => {
  const [open, setOpen] = useState(true);
  const [latestOrders, setLatestOrders] = useState([]);

  const Menus = [
    { title: "Dashboard" },
    { title: "Products", icon: <FaProductHunt /> },
    { title: "Customers", icon: <FaUser /> },
    { title: "Profile", spacing: true, icon: <ImProfile /> },
    { title: "Setting", icon: <AiFillSetting /> },
    { title: "Logout", icon: <RiLogoutCircleFill /> },
  ];
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");

  const [id, setId] = useState(0);

  const getLatestProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/orders/latest");
      setLatestOrders(res.data.data);
    } catch (error) {
      console.log("error");
    }
  };

  var count = 0;
  var count2 = 0;

  useEffect(() => {
    getLatestProducts();
  }, []);

  // get customer By Id
  const GetCustomer = ({ customerId }) => {
    const [customerName, setCustomerName] = useState("");

    useEffect(() => {
      const fetchCustomerDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/v1/user/${customerId}`
          );
          console.log(response.data.data.userName);
          // const data = await response.json();
          setCustomerName(response.data.data.userName);
        } catch (error) {
          console.error("Error fetching customer details:", error);
        }
      };

      fetchCustomerDetails();
    }, [customerId]);

    return <>{customerName}</>;
  };

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

      <div className="p-7 bg-dashboardColor2 w-full h-screen overflow-scroll">
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

          <div className="w-full xl:w-3/4 h-screen md:h-420 overflow-y-scroll bg-white rounded-2xl shadow-sm shadow-slate-100 flex flex-col items-center mt-5">
            <h1 className="font-semibold text-xl mt-3">Recent Orders</h1>
            <div className="w-full   overflow-auto hidden md:block">
              <table className="w-full  mt-5">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left w-20">
                      No.
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left w-20">
                      Customer
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left w-20">
                      Total
                    </th>
                    <th className="p-3 text-sm font-semibold tracking-wide text-left w-24">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {latestOrders.length === 0 ? (
                    <p>Loading...</p>
                  ) : (
                    latestOrders.map((order) => (
                      <tr>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {++count}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {order.customer && (
                            <GetCustomer customerId={order.customer} />
                          )}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {order.totalAmount}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {order.date.split("T")[0]}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 gap-4 md:hidden w-full px-5">
           
                {/* <div>No</div>
                  <div>Customer</div>
                  <div>Total</div>
                  <div>Date</div> */}

                {latestOrders.length === 0 ? (
                  <p>Loading...</p>
                ) : (
                  latestOrders.map((order) => (
                    <div className="bg-white space-y-3 p-4 rounded-lg shadow w-full">
                      <div className="flex items-center space-x-2 text-sm">
                        <div className="text-blue-600 font-bold">
                          #{++count2}
                        </div>
                        <div  className="text-sm text-gray-500">{order.date.split("T")[0]}</div>
                      </div>
                      <div className="text-sm text-gray-700">
                        <span className="text-gray-400">customer - </span>
                        {order.customer && (
                          <GetCustomer customerId={order.customer} />
                        )}
                      </div>
                      <div className="text-sm font-medium text-black">Rs.{order.totalAmount}</div>
                    </div>

                    // <tr>
                    //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    //     {++count}
                    //   </td>
                    //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    // {order.customer && (
                    //   <GetCustomer customerId={order.customer} />
                    // )}
                    //   </td>
                    //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    //     {order.totalAmount}
                    //   </td>
                    //   <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    //     {order.date.split("T")[0]}
                    //   </td>
                    // </tr>
                  ))
                )}
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
