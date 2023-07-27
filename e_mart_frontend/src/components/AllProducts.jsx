import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";


const AllProducts = ({ incrementCartCount , setCartItemstoArray}) => {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0);

  const { onAdd,cartItems } = useStateContext();

  const increment = () => {
    setCount(count + 1);
  };

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

  const addToCartHandle = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    setCartItemstoArray(product);

    // onAdd(product);
    
 
  };

  const loadProductDetails = (e) => {
    console.log(e);
  };

  // Get image url
  // function getImageUrl (id) {
  //   // console.log("id eka"+id);
  //   // const imageurlNew=null;
  //   axios
  //     .get(`http://localhost:5000/api/v1/getImage/${id}`)
  //     .then((response) => {
  //       setImageUrl(response.data.dataUrl);
  //       // imageurlNew=response.data.dataUrl;
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading image:", error);
  //     });
  // };

  return (
    <div>
      <div className="flex items-center justify-center mt-8">
        <hr className="w-48 h-0.5 my-4 border-0 rounded dark:bg-grayNew3" />
        <h1 className="text-2xl font-semibold px-2">More to love</h1>
        <hr className="w-48 h-0.5 my-4 border-0 rounded dark:bg-grayNew3" />
      </div>

      <div>
        {/* ... */}
        <div id="productsDiv" className="flex wrap">
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            data.map((product) => {
              return (
                <div key={product._id}>
                  <div className="box" onClick={loadProductDetails}>
                    <div className="product">
                      <div className="img">
                        <span className="discount">
                          {product.discount}% Off
                        </span>
                        <img
                          src={product.imageUrl}
                          alt="image"
                          className="h-150"
                        />
                        <div className="product-like">
                          <label>{count}</label> <br />
                          <i
                            className="fa-regular fa-heart"
                            onClick={increment}
                          ></i>
                        </div>
                      </div>
                      <div className="product-details">
                        <h3>{product.name}</h3>
                        <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                          <h4>Rs.{product.price}.00 </h4>
                          {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                          <button onClick={(e)=>addToCartHandle(e, product)}>
                            <i className="fa fa-plus"></i>
                          </button>
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
    </div>
  );
};

export default AllProducts;
