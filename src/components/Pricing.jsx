import { useState, useEffect, useRef } from "react";
import pricingdata from "../pricingdata";
import { motion, useScroll, useTransform } from "framer-motion";

const Pricing = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to check if the screen width is less than 768px
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Initial check
    checkScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const yProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div className="lg:w-[96.5vw] sm:w-[100vw] h-auto bg-transparent lg:mx-[20px] lg:my-[40px]  flex flex-col items-center my-[40px]">
      <div className="flex justify-center items-center h-[20%] w-[100%] mb-[20px]">
        <h1 className="text-primary text-4xl font-[500] text-center">
          How do we price projects?
        </h1>
      </div>
      <div className="w-[100%] flex flex-wrap items-start justify-center gap-x-[40px] gap-y-[30px]">
        {pricingdata.map((oneData) => {
          const { id, image, header, text } = oneData;
          return (
            <motion.div
              ref={ref}
              style={
                isMobile
                  ? {} 
                  : {
                      scale: scaleProgress,
                      opacity: opacityProgress,
                      y: yProgress,
                    }
              }
              key={id}
              className="w-[90%] sm:w-[45%] lg:w-[420px] flex flex-col rounded-[30px] py-[40px] px-[55px] text-center h-auto lg:h-[545px] bg-secondary border-[1px] border-transparent hover:border-primary transition-all"
            >
              <div className="mb-[30px]">
                <img src={image} alt="" />
              </div>
              <div className="mb-[20px]">
                <h1 className="text-primary text-2xl font-[600]">{header}</h1>
              </div>
              <div className="mb-[25px]">
                <p className="text-primary flex text-start text-[17px]">
                  {text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
