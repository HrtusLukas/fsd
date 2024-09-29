import React from 'react';
import { Link } from 'react-router-dom';
import solution from '../solution';

const Solutions = () => {
  return (
    <div className="lg:w-[1200px] lg:h-[350px] h-auto w-[100vw] lg:bg-secondary bg-transparent  lg:border-[0.5px] lg:fixed border-transparent border-solid flex lg:flex-row flex-col lg:rounded-[20px] lg:overflow-visible translate-y-[1%] overflow-y-auto max-h-[72vh]">
      {solution.map((oneSolution) => {
        const { id, image, name, solution1, solution2, solution3, solution4} = oneSolution;
        return (
          <div key={id} className="h-[100%] w-[100%] m-auto flex flex-col items-baseline py-6 px-10 ">
            <div className='flex w-[100%] justify-start mb-3'><img className="w-[70px] py-4 flex" src={image} alt={name} /></div>
            <div className='flex justify-start w-[100%] mb-3'><h1 className="text-primary text-xl font-[500]">{name}</h1></div>
            <div className="flex flex-col">
              <Link to={""} className="text-primary text-[17px] mb-1  border-b-[0.5px] border-primary  hover:font-[500] hover:border-footer hover:border-b-[1px]">
                {solution1}
              </Link>
              <Link to={""} className="text-primary text-[17px] mb-1  border-b-[0.5px] border-primary  hover:font-[500] hover:border-footer hover:border-b-[1px]">
                {solution2}
              </Link>
              <Link to={""} className="text-primary text-[17px]  mb-1  border-b-[0.5px] border-primary hover:font-[500] hover:border-footer hover:border-b-[1px]">
                {solution3}
              </Link>
              <Link to={""} className="text-primary text-[17px]  hover:font-[500]  ">
                {solution4}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Solutions;
