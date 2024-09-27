import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactMainPage = ({ theme }) => {
  return (
    <div className="pt-[100px] w-[100vw] lg:w-[96.5vw] h-auto bg-transparent m-0 lg:mx-[20px] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[50%] flex flex-col text-primary gap-y-10 mt-[5%] px-[7%]">
        <div>
          <p>Kontakt</p>
          <h1 className="text-5xl">Ozvite sa nám</h1>
        </div>

        <div>
          <p className="text-2xl mb-2">Kde sídlime</p>
          <p>
            FSD s.r.o
            <br />
            Vyšná Korňa 760
            <br />
            023 21 Korňa
          </p>
        </div>

        <div>
          <p className="text-2xl mb-2">Fakturačné údaje</p>
          <p>
            IČO: <span className="text-lg font-[500]">47394625</span>
          </p>
          <p>
            DIČ: <span className="text-lg font-[500]">2023860234</span>
          </p>
          <p>
            IČ DHP: <span className="text-lg font-[500]">SK2023860234</span>
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-2xl mb-2">Sledujte nás:</p>
          <div className="flex flex-wrap justify-start gap-2">
            {[
              { icon: <FaFacebookF size={30} />, link: "" },
              { icon: <RiTwitterXLine size={30} />, link: "https://x.com/?lang=sk" },
              { icon: <FaLinkedinIn size={30} />, link: "https://www.linkedin.com/" },
              { icon: <FaGithub size={30} />, link: "https://github.com/HrtusLukas" },
              { icon: <FaYoutube size={30} />, link: "https://www.youtube.com/" },
              { icon: <FaInstagram size={30} />, link: "https://www.instagram.com/lukas_hrtus/" },
            ].map((social, index) => (
              <span key={index} className="w-[50px] h-[50px] bg-transparent flex items-center justify-center rounded-[25px] border-2 border-primary hover:bg-secondary">
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[50%] px-[5%] mt-[5%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMainPage;
