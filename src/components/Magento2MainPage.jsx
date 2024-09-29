import { motion } from "framer-motion";
import image from "../images/magento-2-eshop.png.webp";

const Magento2MainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Ecommerce platformy</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">Magento 2 e-shop</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              Expandujte váš e-shop s jednou z najkvalitnejších ecommerce platforiem na svete a užívajte si výhody neobmedzených možností vyladeného multistore systému!
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Celosvetovo používaná platforma Magento 2 je verným spoločníkom na ceste k online úspechu. Táto inovatívna
              open-source platforma sa otvára pred vami ako brána do nekonečných možností ecommerce sveta. Svojim výkonom, rýchlosťou a flexibilitou prináša Magento 2 revolúciu.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              S bohatým marketplace rozšírení a pluginov získate nástroje, ktoré potrebujete pre interné procesy a zlepšenie zážitku zákazníkov. S platformou Magento 2 získate slobodu v rozhodnutiach bez vendor-lock.
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

export default Magento2MainPage;
