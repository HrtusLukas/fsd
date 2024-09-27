import websolution from "../websolution";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { motion } from "framer-motion";

const WebSolutions = () => {
  const [visibleId, setVisibleId] = useState(null);

  const toggleVisibility = (id) => {
    if (visibleId === id) {
      setVisibleId(null);
    } else {
      setVisibleId(id);
    }
  };

  return (
    <div className="pt-[100px] w-[100vw] h-auto bg-transparent lg:m-auto lg:mx-[20px]">
      <h2 className="text-primary text-3xl font-[500] text-center mb-[60px]">
        V akých oblastiach odporúčame webové riešenie?
      </h2>
      <div className="w-[90%] md:w-[80%] lg:w-[82%] mx-auto h-auto grid grid-cols-1 md:grid-cols-1 gap-6">
        {websolution.map((oneSolution) => {
          const { id, header, text } = oneSolution;
          return (
            <div
              key={id}
              className="p-4 border-primary border-b-[0.5px] h-auto w-[100%] border-solid text-primary cursor-pointer hover:border-blue-400"
            >
              <div
                className="flex flex-row justify-between items-center"
                onClick={() => toggleVisibility(id)}
              >
                <h1 className="text-xl font-[500] mb-2">{header}</h1>
                {visibleId === id ? <FaMinus /> : <FaPlus />}
              </div>

              
              <motion.div
                initial={false}
                animate={{ height: visibleId === id ? "auto" : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
                onClick={() => toggleVisibility(id)}
              >
                <p  className="text-lg mt-2">{text}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WebSolutions;
