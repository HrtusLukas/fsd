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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">O tíme FSD</h1>
        </motion.div>

        <motion.div
          className="w-full sm:w-[80%] lg:w-[60%] mb-3"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.7 }}
        >
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[14.4px]">
            Sme tím profesionálov s dlhoročnými skúsenosťami a referenciami v odbore. Naším hlavným zameraním sú úspešné e-shopy a mobilné alebo webové aplikácie na mieru.
          </p>
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[14.4px]">
            Vyvíjame štandardizovane svetovými technológiami, vďaka čomu dostávate garanciu znovupoužiteľnosti vytvoreného kódu aplikácie, elimináciu vendor-lock rizika a možnosť kedykoľvek rozširovať tím projektu o vlastných členov.
          </p>
          <p className="text-[18px] sm:text-[20px] lg:text-[22px] mb-[14.4px]">
            Nad našou prácou máte plnú kontrolu vďaka plne transparentnému projektovému riadeniu agilnou metodikou SCRUM a prístupom k online systému projektového riadenia Teamwork.com.
          </p>
        </motion.div>

        <motion.div
          className="w-[50%] hidden lg:flex sm:w-[30%] md:w-[20%] lg:w-[15%]"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.8 }}
        >
          <button className="bg-secondary w-full h-[55px] rounded-[15px] hover:text-white hover:scale-[1.1] transition-transform">
            Pridaj sa k nám
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsMainPage;
