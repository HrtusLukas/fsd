import React from 'react';
import { Link } from 'react-router-dom';
import service from '../data';

const Services = () => {
  return (
    <div className="lg:w-[1200px] h-auto w-[100vw] lg:h-[300px] bg-transparent lg:bg-secondary translate-y-[1%] lg:border-[0.5px] lg:fixed border-primary border-solid flex flex-col lg:flex-row lg:rounded-[20px] 
    lg:overflow-visible overflow-y-auto max-h-[78vh]">

      {service.map((oneService) => {
        const { id, image, name, service1, service2, route1, route2 } = oneService;
        return (
          <div key={id} className="h-auto w-[100%] m-auto flex flex-col items-baseline py-6 px-10">
            <div className="flex w-[100%] justify-start mb-3">
              <img className="lg:w-[70px] w-[70px] py-4 flex" src={image} alt={name} />
            </div>
            <div className="flex justify-start w-[100%] mb-3">
              <h1 className="text-primary text-xl font-[500]">{name}</h1>
            </div>
            <div className="flex flex-col">
              <Link
                to={route1}
                className="text-primary text-[17px] mb-1 border-b-[0.5px] border-primary hover:font-[500] hover:border-background hover:border-b-[1px]"
              >
                {service1}
              </Link>
              <Link to={route2} className="text-primary text-[17px] hover:font-[500]">
                {service2}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
