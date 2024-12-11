import React, { useState } from "react";
import Category from "./Category";
import ReferencesReviews from "./ReferencesReviews";

const ReferencesMainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("eshop"); // Default to ALL

  return (
    <section className="pt-[100px] w-[96.5vw] h-auto bg-transparent mx-[20px] flex flex-col">
      <div className="w-full flex flex-col text-primary mt-[5%] px-[7%]">
        <div>
          <p className="text-xl">References</p>
        </div>
        <div className="my-4">
          <h1 className="text-6xl">Successful Stories of Our Clients</h1>
        </div>
        <div className="w-full lg:w-[60%] mb-3">
          <p className="text-[22px] mb-[14.4px]">
            At FSD, we love our clients' success and know how to help you achieve it. Our clients, such as Annemarie Börlind, SENSET, Najlepsinabytok.sk, BOSP.sk, and Ku-Li Therm, are great examples of how a vision in e-commerce and applications can become a reality.
          </p>
          <p>
            We primarily help established e-shops achieve their business goals and expand into new markets. We are proud of the e-shops and applications crafted by our hands, as they impress customers with unique design, ease of use, and flawless functionality. Do you also want to become part of successful online businesses?
          </p>
        </div>
        <Category onCategorySelect={setSelectedCategory} />
        <ReferencesReviews category={selectedCategory} />
      </div>
    </section>
  );
};

export default ReferencesMainPage;
