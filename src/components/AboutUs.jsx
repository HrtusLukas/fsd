import react from "../images/react-original-wordmark-icon-840x1024-vhmauxp6.png";
import magento from "../images/1024px-Magento_Logo.svg.png.png";
import laravel from "../images/logo-laravel.png.webp";
import image from "../images/pexels-mikhail-nilov-7988079.jpg";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutUs = () => {
  return (
    <div className="lg:w-[96.5vw] lg:h-[90vh] sm:h-auto sm:w-full bg-transparent lg:ml-4 sm:ml-0 flex flex-col lg:flex-row">
      <div className="flex flex-col w-full lg:w-[50%] px-4 lg:pl-[75px] lg:pr-[20px]">
        <div className="text-primary">
          <div className="text-3xl mb-2 lg:mb-4">
            <h2>WE ARE PROFESSIONALS</h2>
          </div>
          <div className="text-4xl sm:text-5xl mb-5 lg:mb-6">
            <h1>Your Business Is Our Priority</h1>
          </div>
          <div className="text-lg sm:text-xl font-bold mb-6 lg:mb-8">
            <p>
              Naším hlavným zameraním sú úspešné e-shopy, mobilné a webové aplikácie na mieru.
            </p>
          </div>
          <div className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8">
            <p>
              Vyvíjame štandardizovane svetovými technológiami, vďaka čomu dostávate garanciu
              znovupoužiteľnosti vytvoreného kódu aplikácie, elimináciu vendor-lock rizika a
              neobmedzené možnosti expanzie.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-x-8 sm:gap-x-10 mb-6 lg:mb-[40px] justify-center lg:justify-start">
          <img src={magento} className="w-[80px] sm:w-[120px] lg:w-[110px] h-auto" alt="Magento logo" />
          <img src={laravel} className="w-[80px] sm:w-[120px] lg:w-[110px] h-auto" alt="Laravel logo" />
          <img src={react} className="w-[80px] sm:w-[120px] lg:w-[110px] h-auto" alt="React logo" />
        </div>

        <div className="hover:text-white hover:scale-110 cursor-pointer bg-footer w-[150px] sm:w-[170px] h-[45px] sm:h-[55px] rounded-[15px] hidden lg:flex justify-center items-center mx-auto lg:mx-0">
          <Link to="aboutus">
            <button>More About Us</button>
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-[50%] my-6 lg:mt-0 rounded-s-2xl  ">
        <img src={image} className="w-full h-auto rounded-lg" alt="About us image" />
      </div>
    </div>
  );
};

export default AboutUs;
