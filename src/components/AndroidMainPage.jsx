import { motion } from "framer-motion";
import image from "../images/Aplikacie-768x545.png.webp";

const AndroidMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Ecommerce platformy</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-6xl">Vývoj mobilných aplikácií pre iOS a Android</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
            Naprogramovanie mobilnej aplikácie, riadiaci systém, databázy, notifikácie, API prepojenia s využitím senzorov, GPS, fotoaparátu či bluetooth zariadení.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
            Vyvíjame online systémy určené pre interné použitie vo firmách, alebo ako platformy pre vaších zákazníkov. Hlavným cieľom je zefektívniť procesy vo firme, automatizovať predaj Vašich služieb alebo vytvoriť unikátnu službu formou SaaS produktu, ktorého cieľom je monetizácia formou rôznych poplatkov. Programujeme 10 rokov v osvedčených svetových frameworkoch Laravel a Vue.js s použitím databáz ako Elasticsearch alebo MariaDB, vďaka čomu je váš systém dlhodobo aktualizovateľný, škálovateľný a s vysokým štandardom kvality, aby ste mohli rásť a expandovať bez väčších problémov.
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
