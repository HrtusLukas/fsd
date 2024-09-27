import { motion } from "framer-motion";
import image from "../images/prestashop-eshop-768x545.png.webp";

const WebMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Ecommerce platformy</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-6xl">Prestashop e-shop</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
            Začnite svoje podnikanie s vysoko flexibilnou platformou Prestashop, ktorá je ideálna pre stredné a rastúce e-shopy.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
            Prehlbujte svoje online podnikanie s PrestaShopom, ktorý ponúka moderné rozhranie, pokročilé možnosti prispôsobenia webu a integrované funkcionality. Posyktuje špičkové prostredie pre e-commerce biznis a zaisťuje konkurenčnú výhodu na domácom trhu a úspešnú expanziu na zahraničné trhy.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
            Za roky skúseností sme pripravili balíky modulov a funkcií, ktorými rozširujeme a upravujeme základný Prestashop systém. Máme riešenie pre existujúce obchody s plne rozbehnutým marketingom, ale aj pre začínajúcich online podnikateľov. 
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

export default WebMainPage;
