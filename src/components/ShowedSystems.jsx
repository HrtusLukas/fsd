import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import systemdata from "../systemdata";

const ShowedSystems = () => {
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
    offset: ["0 1", "1 1"],
  });

  
  const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgres = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const yProgres = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div>
      <section className="lg:w-[96.5vw] sm:w-[100vw] h-auto min-h-[100vh] bg-transparent lg:mx-[20px] sm:mx-0 py-10">
        <div className="flex flex-col w-[100%] mb-[35px]">
          <div className="flex justify-center text-xl lg:text-2xl text-primary mb-3">
            <h1>Services</h1>
          </div>

          <div className="flex justify-center text-3xl md:text-4xl lg:text-5xl font-[600] text-primary text-center">
            Applications, E-commerce and IT Solutions
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[30px] h-auto w-[100%]">
          {systemdata.map((oneSystem) => {
            const { id, image, header, text, button } = oneSystem;
            return (
              <motion.div
                ref={ref}
                style={
                  isMobile
                    ? {} // No animations on mobile
                    : {
                        scale: scaleProgres,
                        opacity: opacityProgres,
                        y: yProgres,
                      }
                }
                key={id}
                className="w-[90%] sm:w-[45%] sm:h-[70vh] lg:w-[400px] flex flex-col rounded-[30px] py-[30px] px-[25px] lg:py-[40px] lg:px-[45px] text-center h-auto lg:h-[470px] bg-secondary hover:border-[1px] hover:border-primary transition-all"
              >
                <div className="mb-[20px] lg:mb-[30px]">
                  <img src={image} alt={header} className="w-[60px] lg:w-[70px] mx-auto" />
                </div>
                <div className="mb-[15px] lg:mb-[20px]">
                  <h1 className="text-primary text-xl lg:text-2xl font-[600]">{header}</h1>
                </div>
                <div className="mb-[20px] lg:mb-[25px]">
                  <p className="text-primary text-[15px] lg:text-[17px] text-start">
                    {text}
                  </p>
                </div>
                <div className="hidden lg:flex items-end">
                  <a className="relative text-primary shrink-border cursor-pointer">
                    {button}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ShowedSystems;
