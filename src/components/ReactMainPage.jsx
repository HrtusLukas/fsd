import { motion } from "framer-motion";
import image from "../images/prestashop-eshop-768x545.png.webp";

const ReactMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Web Applications on the Platform</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">React</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              Build modern and dynamic websites with React, offering flexibility and efficiency for today’s projects.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              React enables fast and interactive user interfaces, suitable for projects both big and small. 
              With high performance and a wide range of components, it is an ideal choice for modern web application development.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              We follow best practices and use proven components to create efficient React applications that are easy to maintain 
              and optimized for growing businesses and startups alike.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ x: "200vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.2 }}
          className="w-[100%] lg:w-[50%] mt-8 lg:mt-0 flex justify-center"
        >
          <img className="p-[5%] lg:w-[90%]" src={image} alt="React Development" />
        </motion.div>
      </section>
    </>
  );
};

export default ReactMainPage;
