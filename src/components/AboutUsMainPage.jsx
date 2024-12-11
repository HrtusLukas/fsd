import { motion } from "framer-motion";

const AboutUsMainPage = () => {
  return (
    <section className="pt-[100px] w-[96.5vw] h-auto md:h-[120vh] bg-transparent mx-[20px] flex flex-col">
      <div className="w-full flex flex-col text-primary mt-[5%] px-[5%] sm:px-[7%]">
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
        >
          <p className="text-xl sm:text-2xl">About Us</p>
        </motion.div>

        <motion.div
          className="my-4"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">About FSD</h1>
        </motion.div>

        <motion.div
          className="w-full sm:w-[80%] lg:w-[60%] mb-3"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.7 }}
        >
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[14.4px]">
            We are a team of professionals with years of experience and references in the industry. Our main focus is on successful e-shops and custom mobile or web applications.
          </p>
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[14.4px]">
            We develop with standardized world technologies, which guarantees you the reusability of the created application code, elimination of vendor-lock risks, and the possibility to expand the project team with your own members at any time.
          </p>
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[14.4px]">
            You have full control over our work thanks to fully transparent project management using the agile SCRUM methodology and access to the online project management system Teamwork.com.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsMainPage;
