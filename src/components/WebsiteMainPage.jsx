import { motion } from "framer-motion";
import image from "../images/weby-a-portaly-768x545.png.webp";

const WebsiteMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Websites</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">Corporate Websites and Portals</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              We see your website as a 24/7 salesperson, which is why we take a focused approach to its structure, content, design, and CTA elements. It’s a key tool for building customer trust and strengthening your brand.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Websites and corporate portals are essential tools for any business, providing a highly effective means to reach new customers, communicate with existing clients, and promote brand identity.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              They often serve as the initial point of contact between a customer and a company, delivering key information about the business, its products, and services. Our websites include interactive features like user authentication, memberships, content management, and e-commerce functionalities, using modern technologies such as Next.js, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        <motion.div 
          initial={{ x: "200vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.2 }} 
          className="w-[100%] lg:w-[50%] mt-8 lg:mt-0 flex justify-center">
          <img className="p-[5%]" src={image} alt="Corporate Websites" />
        </motion.div>
      </section>
    </>
  );
};

export default WebsiteMainPage;
