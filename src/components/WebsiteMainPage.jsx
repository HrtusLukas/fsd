import { motion } from "framer-motion";
import image from "../images/weby-a-portaly-768x545.png.webp"
const WebsiteMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Weby</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-6xl">Firemné weby a portály</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
            Web považujeme za obchodníka ktorý pracuje 24/7 a preto špeciálne pristupujeme k jeho štruktúre, textom, grafike a CTA (call to action) prvkom. Je pre Vás kľúčovým nástrojom na získavanie dôvery zákazníkov a posilnenie značky. 
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
            Webové stránky a firemné portály sú nevyhnutným nástrojom pre každý biznis. Slúžia ako efektívny prostriedok na získavanie nových zákazníkov, komunikáciu s existujúcimi klientmi a budovanie značky.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
            Najčastejšie patria medzi úvodný kontaktný bod medzi zákazníkom a spoločnosťou. Ich cieľom je poskytnutie relevantných informácií o firme, ponúkaných produktoch alebo službách. Často zahŕňajú interaktívne funkcie, ako sú prihlasovanie, členstvo, možnosti správy obsahu, e-commerce a pod. 
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

export default WebsiteMainPage;
