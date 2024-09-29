import { useState } from "react";
import { motion } from "framer-motion";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import team5 from "../images/team5.jpg";
import team6 from "../images/team6.jpg";
import team7 from "../images/team7.jpg";
import team8 from "../images/team8.jpg";

const slides = [
  team1,
  team2,
  team3, 
  team4,
  team5, 
  team6,
  team7,
  team8
];

const transitionSettings = {
  duration: 1.5, // Duration for smooth transition
  ease: [0.25, 0.46, 0.45, 0.94], // Smoother cubic-bezier easing
};

const TeamPhoto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  const getPrevIndex = () => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="hidden h-[70vh] mx-[20px] lg:flex justify-center items-center gap-x-20">
      {/* Previous Photo */}
      <motion.img
        key={getPrevIndex()}
        src={slides[getPrevIndex()]}
        className="w-[350px] h-[250px] object-cover opacity-70 cursor-pointer"
        alt="Previous"
        onClick={() => handleClick(getPrevIndex())}
        initial={{ x: -200, scale: 0.8, opacity: 0.8 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{ x: -200, scale: 0.8, opacity: 0.8 }}
        transition={transitionSettings}
      />
      
      {/* Current (Center) Photo */}
      <motion.img
        key={currentIndex}
        src={slides[currentIndex]}
        className="w-[500px] h-[400px] object-cover mx-[20px] cursor-pointer"
        alt="Current"
        initial={{ x: 200, scale: 1.1, opacity: 0 }} // Start from the right side
        animate={{ x: 0, scale: 1.2, opacity: 1 }}   // Move to the center
        exit={{ x: -200, scale: 1.1, opacity: 0 }}   // Move out to the left
        transition={transitionSettings}
      />

      {/* Next Photo */}
      <motion.img
        key={getNextIndex()}
        src={slides[getNextIndex()]}
        className="w-[350px] h-[250px] object-cover opacity-70 cursor-pointer"
        alt="Next"
        onClick={() => handleClick(getNextIndex())}
        initial={{ x: 200, scale: 0.8, opacity: 0.8 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{ x: 200, scale: 0.8, opacity: 0.8 }}
        transition={transitionSettings}
      />
    </div>
  );
};

export default TeamPhoto;
