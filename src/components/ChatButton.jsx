import { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import ChatBot from 'react-simple-chatbot';
import { IoMdClose } from "react-icons/io";

const ChatButton = ({ theme }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {clicked ? (
        <ChatBot color="white" className="fixed z-50 right-[1%] bottom-[12%]" 
          steps={[
            {
              id: 'hello-world',
              message: 'Hello World!',
              end: true,
            },
          ]}
          
        />
      ) : (<></>)}
        

        {clicked ? <div
          onClick={() => setClicked(!clicked)}
          className={`chatbox  bg-secondary w-[60px] h-[60px] fixed right-[1%] bottom-[1%] cursor-pointer flex justify-center items-center rounded-[30px] z-50 hover:scale-[1.1]`}
        >
          <button>
            {theme === "light" ? (
              <IoMdClose size={30} />
            ) : (
              <IoMdClose color="white" size={30} />
            )}
          </button>
        </div> :
        <div
          onClick={() => setClicked(!clicked)}
          className={`chatbox  bg-secondary w-[60px] h-[60px] fixed right-[1%] bottom-[1%] cursor-pointer flex justify-center items-center rounded-[30px] z-50 hover:scale-[1.1]`}
        >
          <button>
            {theme === "light" ? (
              <IoChatbubbleEllipsesOutline size={30} />
            ) : (
              <IoChatbubbleEllipsesOutline color="white" size={30} />
            )}
          </button>
        </div>
}
    </>
  );
};

export default ChatButton;
