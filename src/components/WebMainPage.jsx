import { motion } from "framer-motion";
import image from "../images/web-aplikacie-768x545.png.webp";

const WebMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Custom Programming Solutions</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">Web Application Development</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              Develop web applications connected with mobile apps to streamline business processes or offer SaaS solutions for your customers.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              We build online systems for internal company use or as customer-facing platforms. Our goal is to make your processes more efficient, automate service delivery, or create a unique SaaS product for monetization. With over a decade of experience, we develop using frameworks like ASP.NET Core and React, alongside databases like PostgreSQL or MongoDB, ensuring that your system is scalable, maintainable, and capable of growing with your business.
            </p>
          </div>
        </div>
        <motion.div 
          initial={{ x: "200vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.2 }} 
          className="w-[100%] lg:w-[50%] mt-8 lg:mt-0 flex justify-center">
          <img className="p-[5%]" src={image} alt="Web Application Development" />
        </motion.div>
      </section>
    </>
  );
};

export default WebMainPage;
