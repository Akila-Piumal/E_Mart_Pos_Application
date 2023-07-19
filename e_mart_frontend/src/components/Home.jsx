import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import Navbar from "./MyNavbar";
import MyNavbar from "./MyNavbar";
import Model from "./Model";
import { useNavigate } from "react-router-dom";

import logoImage from "../assets/image3.png";
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from "react-icons/ai";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/images/Man-Shoes-Waterproof.png";
import slide_image_2 from "../assets/images/S8-Ultra-Smart-Watch-Series-8-Ultra-Men-Women.png";
import slide_image_3 from "../assets/images/headset2.png";
import slide_image_4 from "../assets/images/vivo-tws-2-earphone.png";
import slide_image_5 from "../assets/images/Vivo phone.png";
import slide_image_6 from "../assets/images/GW01 earbud.png";

const Home = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const user =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();
    setUser(user);

    // if user exists navigate to dashboard

    // if(user) navigate('/dashboard')
  }, []);

  return (
    <>
      <MyNavbar />

      {/*================= Home Content =================== */}

      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="mt-20 flex justify-center">
            <img src={logoImage} alt="" className="w-80" />
          </div>

          <p className="text-3xl sm:text-5xl font-h1family leading-70 sm:mt-5 text-myColor">
            Welcome To E Mart
          </p>
        </div>

        <div className="flex justify-center text-center sm:mt-7 text-fontColor">
          <p className="text-xs sm:text-sm ">
            E Mart is a premium online shopping site in Sri Lanka.
            <br />
            Shop for trendy Clothes, Mobiles, Electronics & many more <br />
            with great prices all across Sri Lanka.
          </p>
        </div>

        <div className="flex flex-row space-x-6 sm:space-x-16 mt-12 text-xl sm:text-4xl">
          <AiFillFacebook
            className="bg-social box-content px-1 sm:px-3 py-0.5 sm:py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue1"
            onClick={() =>
              window.open("https://web.facebook.com/akila.piumal.90")
            }
          />
          <AiFillTwitterCircle
            className="bg-social box-content px-1 sm:px-3 py-0.5 sm:py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-blue2"
            onClick={() => window.open("https://twitter.com/AkilaPiumal99")}
          />
          <AiOutlineWhatsApp
            className="bg-social box-content px-1 sm:px-3 py-0.5 sm:py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-green1"
            onClick={() =>
              window.open("https://web.facebook.com/akila.piumal.90")
            }
          />
          <AiFillGoogleCircle className="bg-social box-content px-1 sm:px-3 py-0.5 sm:py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-red1" />
        </div>

        {/* <div className="imageContainer">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate:0,
              stretch:0,
              depth:100,
              modifier:2.5,
            }}
            
            pagination={{el:'swiper-pagination', clickable:true}}
            navigation={{
              nextEl:'swiper-button-next',
              prevEl:'swiper-button-prev',
              clickable:true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_img" />
            </SwiperSlide>

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
          </Swiper>
        </div> */}
      </div>

      {/*=============== Home Content ends =============== */}
    </>
  );
};

export default Home;
