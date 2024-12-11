import { motion } from "framer-motion";
import image from "../images/Aplikacie-768x545.png.webp";

const AndroidMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Innovative Mobile Solutions</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">Advanced Mobile App Development for iOS & Android</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              We create high-performance mobile apps, integrating features such as real-time data sync, custom APIs, push notifications, and AR capabilities using modern frameworks like React Native, SwiftUI, and Kotlin.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Specializing in solutions for internal business operations and customer-oriented platforms, we focus on enhancing user engagement and automating business processes. Our experience spans frameworks such as Flutter and Swift, alongside database systems like Firebase and PostgreSQL, ensuring that our applications are reliable, scalable, and tailored to your growth needs.
            </p>
          </div>
        </div>
        <motion.div 
          initial={{ x: "200vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 30, duration: 1.2 }} 
          className="w-[100%] lg:w-[50%] mt-8 lg:mt-0">
          <img className="p-[5%]" src={image} />
        </motion.div>
      </section>
    </>
  );
};

export default AndroidMainPage;
