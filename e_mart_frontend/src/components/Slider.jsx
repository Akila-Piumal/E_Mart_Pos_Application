import React from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import watch from "../assets/images/S8-Ultra-Smart-Watch-Series-8-Ultra-Men-Women.png";
import shoes from "../assets/images/Man-Shoes-Waterproof.png"
import phone from "../assets/images/Vivo phone.png"
import vivo_earbud from "../assets/images/vivo-tws-2-earphone.png"
import headset from "../assets/images/headset2.png"

const fadeImages = [
  {
    url: watch,
    name1:"T800 Ultra",
    name2:"SMART WATCH"
  },
  {
    url: shoes,
    name1:"Rubber Men's Sneaker",
    name2:"HIKING SHOES"
  },
  {
    url: phone,
    name1:"Nokia C200",
    name2:"MOBILE PHONE"
  },
  {
    url: vivo_earbud,
    name1:"Vivo TWS 3",
    name2:"BLUETOOTH HEADSET"
  },
  {
    url: headset,
    name1:"HP BM200",
    name2:"BLUETOOTH HEADSET"
  },
];

const Slider = () => {
  return (
    <>
      <div className="bg-grayNew3 w-4/5 mr-5 mt-5 gap-5 rounded-2xl h-475 flex flex-col justify-center ">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div
              div
              className=" w-4/5 mr-5 mt-5 gap-5 rounded-2xl h-475 flex flex-col justify-center "
            >
              <h1 className="text-5xl ml-50 font-semibold">
                {fadeImage.name1}
              </h1>
              <h1 className="text-8xl ml-50 font-semibold text-white">
                {fadeImage.name2}
              </h1>
              <button class="bg-RedSet3 ml-50 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-190 ">
                Buy now
              </button>

              <div className="" id="banner_image">
                <img src={fadeImage.url} alt="item image" className="" />
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </>
  );
};

export default Slider;
