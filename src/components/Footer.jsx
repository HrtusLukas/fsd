import logoDark from "../images/logoDark.png";
import logoLight from "../images/logoLight.png";
import bridge from "../images/bridge-badge.png.webp";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import EmailForm from "./EmailForm";
import { Link } from "react-router-dom";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const Footer = ({ theme }) => {
  return (
    <div className="w-full lg:h-[85.5vh] h-auto bg-footer text-primary relative py-8 md:py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-[90%] m-auto pb-8 border-primary justify-center border-b-[0.5px] border-solid">
 
        <div className="flex flex-col items-start md:items-center lg:items-start">
          <div>
            {theme === "light" ? (
              <img
                src={logoLight}
                alt="Company Logo"
                className="h-auto w-[100px] md:w-[120px]"
              />
            ) : (
              <img
                src={logoDark}
                alt="Company Logo"
                className="h-auto w-[100px] md:w-[120px]"
              />
            )}
          </div>
          <p className="mt-4 text-[16px] md:text-[18px] lg:text-[20px] font-medium">
            FSD s.r.o
            <br />
            Vyšná Korňa 760
            <br />
            023 21 Korňa
          </p>
          {/* Social media icons */}
          <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-4 w-fit">
            {[
              { href: "", icon: <FaFacebookF size={20} />, id: "facebook" },
              { href: "https://x.com/?lang=sk", icon: <RiTwitterXLine size={20} />, id: "twitter" },
              { href: "https://www.linkedin.com/", icon: <FaLinkedinIn size={20} />, id: "linkedin" },
              { href: "https://github.com/HrtusLukas", icon: <FaGithub size={20} />, id: "github" },
              { href: "https://www.youtube.com/", icon: <FaYoutube size={20} />, id: "youtube" },
              { href: "https://www.instagram.com/lukas_hrtus/", icon: <FaInstagram size={20} />, id: "instagram" }
            ].map(({ href, icon, id }) => (
              <span key={id} className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-2 border-primary hover:bg-secondary">
                <a href={href} aria-label={id}>{icon}</a>
              </span>
            ))}
          </div>
        </div>


        <div className="flex flex-col">
          <h3 className="font-semibold text-[24px] lg:text-[30px]">Služby</h3>
          <ul className="mt-2 space-y-2 text-[14px] md:text-[16px] lg:text-[17px]">
            <li className="underline hover:no-underline">
              <Link to="/magento-2-e-shop">Magento 2 e-shop</Link>
            </li>
            <li className="underline hover:no-underline">
              <Link to="/prestashop-e-shop">Prestashop e-shop</Link>
            </li>
            <li className="underline hover:no-underline">
              <Link to="/vyvoj-webovych-aplikacii">Vývoj webových aplikácií</Link>
            </li>
            <li className="underline hover:no-underline">
              <Link to="/vyvoj-mobilnych-aplikacii">Vývoj mobilných aplikácií</Link>
            </li>
            <li className="underline hover:no-underline">
              <Link to="/tvorba-webstranok-na-mieru">Firemné weby a portály</Link>
            </li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="font-semibold text-[24px] lg:text-[30px]">FSD</h3>
          <ul className="mt-2 space-y-2 text-[14px] md:text-[16px] lg:text-[17px]">
            <li className="underline hover:no-underline">
              <a href="">O tíme</a>
            </li>
            <li className="underline hover:no-underline">
              <a href="">Referencie</a>
            </li>
            <li className="underline hover:no-underline">
              <a href="">Kontakt</a>
            </li>
            <li className="underline hover:no-underline">
              <a href="">Všeobecné obchodné podmienky</a>
            </li>
            <li className="underline hover:no-underline">
              <a href="">Logo a súbory na stiahnutie</a>
            </li>
          </ul>
        </div>

 
        <div className="flex flex-col items-start">
          <h3 className="font-semibold text-[24px] lg:text-[30px]">FSD Newsletter</h3>
          <p className="mt-2 text-[14px] md:text-[16px]">Prihláste sa na odber noviniek</p>
          <EmailForm />
          <div className="mt-4">
            <a href="https://www.ecommercebridge.sk/">
              <img
                src={bridge}
                alt="Bridge Badge"
                className="transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[80%] translate-y-[-140%]">
        <Link to="/contact" className="w-[175px] hidden lg:flex hover:scale-[1.1] justify-center items-center gap-2 bg-secondary h-[55px] rounded-[15px]">
          <MdOutlineLocalPostOffice size={22} />
          NAPÍŠTE NÁM
        </Link>
      </div>

 
      <div className="mt-8 lg:mt-[70px] text-center text-[12px] md:text-[14px] lg:text-[16px]">
        &copy; 2024 FSD S.R.O Všetky práva vyhradene
      </div>
    </div>
  );
};

export default Footer;
