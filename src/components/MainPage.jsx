import React, { useState, useEffect } from "react";
import mainImage from "../images/mainImage.jpg";
import Image from "../images/mainImage.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainPage = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "YOU WANT WE MAKE";
  let speed = 100;

  useEffect(() => {
    let idLetter = 0;
    let printer;

    function printText() {
      if (idLetter <= fullText.length) {
        setDisplayText(fullText.slice(0, idLetter));
        idLetter++;
        printer = setTimeout(printText, speed);
      } else {
        clearTimeout(printer);
      }
    }

    printText();

    return () => {
      clearTimeout(printer);
    };
  }, []);

  return (
    <section className="pt-[100px] lg:w-[96.5vw] sm:w-[100vw] h-auto lg:min-h-[100vh] sm:h-[120vh] bg-transparent mx-[20px] flex flex-col">
      <div className="flex flex-col lg:flex-row mt-[5%] w-full lg:justify-between lg:items-center flex-wrap">
        
        <div className="w-full lg:w-[50%] flex flex-col items-center justify-center text-center lg:text-left mb-10 lg:mb-0">
          <div>
            <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl">
              {displayText.slice(0, 8)} 
            </h1>
          </div>
          <div className="pb-[8%]">
            <h2 className="text-primary text-3xl md:text-4xl">
              {displayText.slice(8)} 
            </h2>
          </div>
          
          <div className="hidden lg:block w-[60%] md:w-[40%] lg:w-[20%]">
            <Link to="/references">
              <button className="bg-secondary w-full h-[55px] rounded-[15px] hover:text-white hover:scale-[1.1] transition-all">
                References
              </button>
            </Link>
          </div>
        </div>

        
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          <motion.img
            initial={{ x: "200vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 30, duration: 1.2 }}
            className="w-[80%] lg:w-[100%] object-cover"
            src={Image}
            alt="Main"
          />
        </div>
      </div>
    </section>
  );
};

export default MainPage;
