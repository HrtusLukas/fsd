import { motion } from "framer-motion";
import image from "../images/magento-2-eshop.png.webp"; // You may replace this with a relevant Blazor image.
import image2 from "../images/Blazor.png";

const BlazorMainPage = () => {
  return (
    <>
      <section className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent lg:mx-[20px] flex flex-col lg:flex-row">
        <div className="w-[100%] lg:w-[50%] flex flex-col text-primary mt-[5%] px-[5%] lg:px-[7%]">
          <div>
            <p className="text-lg lg:text-xl">Webové aplikácie na platforme</p>
          </div>
          <div className="my-4">
            <h1 className="text-4xl lg:text-5xl">ASP.NET Blazor</h1>
          </div>
          <div className="w-[100%] mb-3">
            <p className="text-[18px] lg:text-[22px] mb-4">
              Vytvárajte interaktívne webové aplikácie s jednou z najinovatívnejších technológií na trhu - ASP.NET Blazor.
              Užívajte si výhody plne integrovaného ekosystému pre moderné webové aplikácie bez nutnosti učenia nového jazyka!
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Blazor vám umožňuje písať front-end a back-end aplikácie v C# a zdieľať kód medzi nimi, čím zjednodušuje vývoj.
              S robustným komponentným modelom a rozsiahlymi knižnicami vám Blazor ponúka flexibilitu a výkon, ktorý potrebujete pre
              vytvorenie bohatých webových aplikácií.
            </p>
            <p className="text-[14px] lg:text-[16px] mb-4">
              Vďaka podpoře server-side a client-side rendering, môžete vytvárať aplikácie, ktoré sú rýchle, responzívne a
              majú vynikajúci užívateľský zážitok. Blazor vás zbavuje zložitosti JavaScriptu a umožňuje vám sústrediť sa
              na logiku a používateľské rozhranie aplikácie.
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
