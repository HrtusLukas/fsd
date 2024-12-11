import { motion } from "framer-motion";
import image from "../images/magento-2-eshop.png.webp"; 
import image2 from "../images/Blazor.png";

const BlazorMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Web Applications Platform</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">ASP.NET Blazor</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              Build interactive web applications using one of the most innovative technologies on the market - ASP.NET Blazor.
              Enjoy the benefits of a fully integrated ecosystem for modern web apps without needing to learn a new language!
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Blazor allows you to write both front-end and back-end code in C# and share code between them, simplifying development.
              With a robust component model and extensive libraries, Blazor offers the flexibility and power you need to create
              rich web applications.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Thanks to support for both server-side and client-side rendering, you can create applications that are fast, responsive,
              and provide an excellent user experience. Blazor frees you from the complexities of JavaScript, allowing you to focus
              on application logic and user interface.
            </p>
          </div>
        </div>
        <motion.div
          initial={{ x: "200vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.2 }}
          className="w-[100%] lg:w-[50%] mt-8 lg:mt-0 flex justify-center"
        >
          <img className="p-[5%] lg:w-[90%]" src={image2} alt="Blazor" />
        </motion.div>
      </section>
    </>
  );
};

export default BlazorMainPage;
