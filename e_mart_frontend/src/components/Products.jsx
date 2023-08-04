import React, { useEffect, useState } from "react";
import AllProducts from "./AllProducts";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/products");

      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

// HP BM200 Headset
// 8500
// electronics
// HP BM200 500 MAH WIRELESS STEREO 4.2 BLUETOOTH HEADSET BLACK

// Vivo TWS 3 Earbud
// electronics
// Vivo TWS 3 true wireless intelligent noise reduction Bluetooth headset Hi-Fi wireless headset in-ear original genuine

// Nokia X6 Mobile Phone
// phone
// Nokia X6 6.1 Plus Refurbished Mobile Phone Dual Sim 4G LTE 5.8'' 16MP 4G ROM Android Smartphone Original Unlocked
  
const deleteItem = async (productId) => {
    const res =await axios.delete(`http://localhost:5000/api/v1/products/${productId}`)
    if(res.status==200){
      alert(`${res.data.message}`)
      getData();
    }
  }

  return (
    <div>
      {/* ... */}
      <div id="productsDiv" className="flex wrap">
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          data.map((product) => {
            return (
              <div key={product._id}>
                <div className="box">
                  <div className="product">
                    <p className="text-sm border rounded-xl w-max px-2 border-lime-500 text-lime-500 font-semibold">
                      {product.quantity > 0 ? "in stock" : "out of stock"}
                    </p>
                    <div className="img">
                      <img
                        src={product.imageUrl}
                        alt="image"
                        className="h-150"
                      />
                    </div>
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <div className="price">
                        <h4>Rs.{product.price}.00 </h4>
                        <div className="p-2 border rounded-md hover:bg-red-600  hover:text-white cursor-pointer" onClick={()=>deleteItem(product._id)}>
                          <AiFillDelete size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
