import { FaRegCheckSquare } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const Category = () => {
  
  

  return (
    <div className="w-[60%]">
      <div className="flex flex-col gap-x-8">
        <h1 className="text-primary text-3xl my-[30px]">Choose Category</h1>
        <div className="flex flex-row gap-x-2">
          <div
            className="category flex flex-col items-center bg-secondary hover:bg-footer cursor-pointer justify-center w-[350px] h-[110px] rounded-[15px]">
            <FaRegCheckSquare size={50} />
            <p>VŠETKY</p>
          </div>
          <div
            className="category flex flex-col items-center bg-secondary hover:bg-footer cursor-pointer justify-center w-[550px] h-[110px] rounded-[15px]"
          >
            <GiShoppingCart size={50} />
            <p>E-SHOPOVÉ RIEŠENIA</p>
          </div>
          <div
            className="category flex flex-col items-center bg-secondary hover:bg-footer cursor-pointer justify-center w-[550px] h-[110px] rounded-[15px]"
          >
            <IoIosPhonePortrait size={50} />
            <p>MOBILNÉ APLIKÁCIE</p>
          </div>
          <div
            className="category flex flex-col items-center bg-secondary hover:bg-footer cursor-pointer justify-center w-[550px] h-[110px] rounded-[15px]"
          >
            <CgWebsite size={50} />
            <p>WEBOVÉ APLIKÁCIE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
