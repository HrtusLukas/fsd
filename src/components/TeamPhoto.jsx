import { useRef } from "react";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";
import team3 from "../images/team3.jpg";
import team4 from "../images/team4.jpg";
import team5 from "../images/team5.jpg";
import team6 from "../images/team6.jpg";
import team7 from "../images/team7.jpg";
import team8 from "../images/team8.jpg";
import { motion, useScroll, useTransform } from "framer-motion";


const TeamPhoto = () => {

  

  return (
    <div className="hidden lg:block h-[70vh] mx-[20px]">
      <div className="grid grid-cols-3 grid-rows-1 gap-8 h-[100%]">
        <div className="grid grid-cols-1 grid-rows-2">
          <div className="grid grid-cols-2 grid-rows-1">
            <img  
              className="w-[100%] h-[100%]"
              src={team6}
              alt="Team member 6"
              loading="lazy"
            />
            <img
              className="w-[100%] h-[100%]"
              src={team5}
              alt="Team member 5"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 grid-rows-1">
            <img
              className="w-[100%] h-[100%]"
              src={team1}
              alt="Team member 1"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-1">
          <img
            className="w-[100%] h-[100%]"
            src={team2}
            alt="Team member 2"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 grid-rows-2">
          <div className="grid grid-cols-2 grid-rows-1">
            <img
              className="w-[100%] h-[100%]"
              src={team8}
              alt="Team member 8"
              loading="lazy"
            />
            <img
              className="w-[100%] h-[100%]"
              src={team7}
              alt="Team member 7"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 grid-rows-1">
            <img
              className="w-[100%] h-[100%]"
              src={team4}
              alt="Team member 4"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPhoto;  