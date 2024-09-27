import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import logoDark from "../images/Black_White_Minimalist_Modern_Initial_Name_M_D_Logo__1_-removebg-preview.png";
import logoLight from "../images/logo.png";
import { Link } from "react-router-dom";
import Services from "./Services";
import Solutions from "./Solutions";
import { MdAccountCircle } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({ theme, toggleTheme }) => {
  const [language, setLanguage] = useState("sk");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to check if the screen width is less than 768px
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Initial check
    checkScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const [serviceHover, setServiceHover] = useState(false);
  const [solutionHover, setSolutionHover] = useState(false);

  const handleServicesOver = () => setServiceHover(true);
  const handleServicesOut = () => setServiceHover(false);

  const handleSolutionsOver = () => setSolutionHover(true);
  const handleSolutionsOut = () => setSolutionHover(false);

  const [visibleId, setVisibleId] = useState(null);

  const toggleVisibleId = (id) => {
    setVisibleId((prevId) => (prevId === id ? null : id));
  };
 
  return (
    <section>
      {!isMobile ? (
        <div className="navBar h-[100px] w-[96.5vw] border-b-[0.5px] border-b-primary bg-background flex justify-between items-center mx-[20px] m-auto box-border fixed z-50">
          <div className="h-[100%]">
            <ul className="flex space-x-4 h-[100%]">
              <li
                className="h-[100%] hover:border-b-secondary hover:border-b-[3px]"
                onMouseOver={handleServicesOver}
                onMouseOut={handleServicesOut}
              >
                <p className="opacity-50 hover:opacity-100 flex items-center h-[100%] text-primary text-xl">
                  Services
                </p>
                {serviceHover && (
                  <div
                    onMouseOver={handleServicesOver}
                    onMouseOut={handleServicesOut}
                  >
                    <Services />
                  </div>
                )}
              </li>
              <li
                className="h-[100%] hover:border-b-secondary hover:border-b-[3px]"
                onMouseOver={handleSolutionsOver}
                onMouseOut={handleSolutionsOut}
              >
                <p className="opacity-50 hover:opacity-100 flex items-center h-[100%] text-primary text-xl">
                  Solutions
                </p>
                {solutionHover && (
                  <div
                    onMouseOver={handleSolutionsOver}
                    onMouseOut={handleSolutionsOut}
                  >
                    <Solutions />
                  </div>
                )}
              </li>
              <li className="h-[100%] hover:border-b-secondary hover:border-b-[3px]">
                <Link to="/aboutus" className="opacity-50 hover:opacity-100 flex items-center h-[100%] text-primary text-xl">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <nav>
              <Link to="/" className="justify-center">
                {theme === "light" ? (
                  <img
                    src={logoLight}
                    alt="Company Logo"
                    className="h-[120px] w-[120px]"
                  />
                ) : (
                  <img
                    src={logoDark}
                    alt="Company Logo"
                    className="h-[120px] w-[120px]"
                  />
                )}
              </Link>
            </nav>
          </div>

          <div className="h-[100%]">
            <nav className="h-[100%]">
              <ul className="flex space-x-4 items-center h-[100%]">
                <li>
                  <div className="flex justify-center">
                    <button onClick={toggleTheme}>
                      {theme === "light" ? (
                        <MdSunny size={20} />
                      ) : (
                        <LuMoon color="white" size={20} />
                      )}
                    </button>
                  </div>
                </li>
                <li className="h-[100%] flex items-center hover:border-b-secondary hover:border-b-[3px]">
                  <Link to="/contact" className="opacity-50 hover:opacity-100 flex items-center h-[100%] text-primary text-xl">
                    Contact
                  </Link>
                </li>
                <li className="h-[100%] flex items-center hover:border-b-secondary hover:border-b-[3px]">
                  <Link to="/references" className="opacity-50 hover:opacity-100 flex items-center h-[100%] text-primary text-xl">
                    References
                  </Link>
                </li>
                <li className="h-[100%] flex items-center cursor-pointer">
                  <Link to="/register">
                    {theme === "light" ? (
                      <MdAccountCircle size={30} />
                    ) : (
                      <MdAccountCircle color="white" size={30} />
                    )}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className="navBar h-[100px] w-[100vw] border-b-[0.5px] border-b-primary bg-background flex justify-center items-center box-border fixed z-50">
          <div className="relative w-full flex justify-between items-center px-4">
            
            
            
            <Link to="/" className="flex justify-center">
              {theme === "light" ? (
                <img
                  src={logoLight}
                  alt="Company Logo"
                  className="h-[90px] w-[90px]"
                />
              ) : (
                <img
                  src={logoDark}
                  alt="Company Logo"
                  className="h-[90px] w-[90px]"
                />
              )}
            </Link>

            <button
              className="flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BsThreeDots
                size={35}
                color={theme === "light" ? "black" : "white"}
              />
            </button>
            
            {menuOpen && (
              <div className="absolute top-[90px] left-0 w-full bg-background border-t-[0.5px] border-t-primary">
                <ul className="flex flex-col items-center py-2">
                <li id="1"  onClick={() => toggleVisibleId(1)} className="py-2 ">
                  <div className="flex items-center">
                    <p className="text-primary text-xl ">
                      Services
                    </p>
                    {theme === "light" ? <MdKeyboardArrowDown size={20}  className="absolute right-3 "/> : <MdKeyboardArrowDown color="white" size={20}  className="absolute right-3 "/> } 
                    </div>
                    {visibleId === 1  ? 
                      <Services />
                     : <></>}
                    
                  </li>
                  <li id="2" onClick={() => toggleVisibleId(2)} className="py-2 ">
                    <div className="flex items-center">
                    <p className="text-primary text-xl">
                      Solutions
                    </p>
                    {theme === "light" ? <MdKeyboardArrowDown size={20}  className="absolute right-3 "/> : <MdKeyboardArrowDown color="white" size={20}  className="absolute right-3 "/> }
                    </div>
                    {visibleId === 2  ? 
                    <Solutions />
                    : <></>}
                  </li>

                  
                <li className="py-2">
                    <Link to="/aboutus" className="text-primary text-xl">
                      About Us
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/contact" className="text-primary text-xl">
                      Contact
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/references" className="text-primary text-xl">
                      References
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link to="/register" className="text-primary text-xl">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
