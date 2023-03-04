import React from "react";
import Title from "./Title";
import Par from "./Par";

import BI from "../assets/motivation.png";
import DM from "../assets/data-management.png";
import DV from "../assets/data-visualization.png";

export function Service({ text, name, children }) {
  return (
    <div className="grid grid-rows-2 lg:flex lg:flex-row">
      <div className="border-turq border-solid  flex flex-nowrap flex-row border-2 rounded-[25px] md:rounded-[50px] md:py-10  pl-8 md:pl-10 lg:pl-16 pr-8 md:min-w-[491px] hover:bg-[#21385a] shadow-lg hover:scale-105 transition duration-200 dark:border-lborder dark:duration-300 dark:hover:bg-[#f1f1f1]">
        <div className="inline-block my-auto">
          <img src={name} width="85" className="py-5 md:py-0"></img>
        </div>
        <div className="my-auto mx-auto">
          <h2 className="text-white font-heading pl-4 text-lg md:text-3xl dark:text-blue duration-300">
            {text}
          </h2>
        </div>
      </div>
      <div className="flex mx-2 md:mx-auto my-auto pt-3 md:pt-0 md:pl-5 lg:pl-20">
        <Par>{children}</Par>
      </div>
    </div>
  );
}
function Services() {
  return (
    <div className="row">
      <Title>Services</Title>
      <div className="py-10 space-y-10 md:space-y-6">
        <Service name={DM} text="Data Management">
          The most important step in the Data Analysis process is data collection, storage, and use, which must be done safely, effectively, and affordably. It establishes how effectively the analysis is driven.
        </Service>
        <Service name={DV} text="Data Visualization">
          Data results must be clearly and effectively communicated through visual storytelling to gather and provide insightful information for the business.
        </Service>
        <Service name={BI} text="BI Reporting">
        I aim to have a tight working relationship with the business approach in order to create the most accurate strategy that allows it simple for clients to make decisions.
        </Service>
      </div>
    </div>
  );
}

export default Services;
