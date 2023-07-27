import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "./TempData";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const SuperDeals = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  //   ====================================
  //  change the slideshow item count when resizing
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const setSlidesCount = () => {
    if (windowSize[0] < 600) {
      return 1;
    } else if (windowSize[0] < 750) {
      return 2;
    } else if (windowSize[0] < 1000) {
      return 3;
    } else {
      return 4;
    }
  };

  // ========================================

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: setSlidesCount(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div>
        <div id="heading" className="flex items-center ml-5 mt-20">
          <i className="fa fa-bolt text-red1 m-10"></i>
          <h1 className="text-3xl font-semibold">
            Super <span className="text-red1 italic">Deals</span>
          </h1>
          <p className="text-gray-400 ml-6">Top products, Incredible prices.</p>
        </div>

        <div id="products" className="bg-homeBaground m-4 rounded-xl shadow-lg">
          <Slider {...settings}>
            {data.productItems.map((productItems) => {
              return (
                <div className="box ">
                  <div className="product">
                    <div className="img">
                      <span className="discount">
                        {productItems.discount}% Off
                      </span>
                      <img
                        src={productItems.cover}
                        alt="image"
                        className="h-300"
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
                      <h3>{productItems.name}</h3>
                      <div className="rate">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <h4>Rs.{productItems.price}.00 </h4>
                        {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                        <button onClick={() => alert("add to cart")}>
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SuperDeals;
