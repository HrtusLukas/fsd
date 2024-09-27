import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";



const UpButton = ({theme}) => {

  

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrolled = window.scrollY;
      let scrollable = document.documentElement.scrollHeight - window.innerHeight;

     
      if (Math.ceil(scrolled) > scrollable / 3) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
     
      {isVisible && (
        <div
          className={`upButton bg-secondary w-[60px] h-[60px] fixed left-[1%] bottom-[1%] cursor-pointer hidden lg:flex justify-center items-center rounded-[30px] z-50 hover:scale-[1.1]`}
          onClick={scrollToTop}
        >
          <button className="flex justify-center items-center">
            {theme === "light" ? (
              <FaArrowUp size={25} />
            ) : (
              <FaArrowUp color="white" size={25} />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default UpButton