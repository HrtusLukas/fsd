import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

const Category = ({ onCategorySelect }) => {
  const categories = [
    { name: "ALL", icon: <FaRegCheckSquare size={50} />, label: "ALL CATEGORIES" },
    { name: "eshop", icon: <GiShoppingCart size={50} />, label: "E-SHOP SOLUTIONS" },
    { name: "custom", icon: <IoIosPhonePortrait size={50} />, label: "CUSTOM PROGRAMING" },
    { name: "company-web", icon: <CgWebsite size={50} />, label: "COMPANY-WEB" },
  ];

  return (
    <div className="w-[60%]">
      <div className="flex flex-col gap-x-8">
        <h1 className="text-primary text-3xl my-[30px]">Choose Category</h1>
        <div className="flex flex-row gap-x-2">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => onCategorySelect(category.name)}
              className="category flex flex-col items-center bg-secondary hover:bg-footer cursor-pointer justify-center w-[550px] h-[110px] rounded-[15px]"
            >
              {category.icon}
              <p>{category.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
