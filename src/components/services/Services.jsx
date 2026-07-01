import React from "react";
import ServicesCards from "./ServicesCards";
import { cn } from "../../utils/cn";

const cards = [
  {
    id: "1",
    isActive: true,
    title: "Freshness Guaranteed",
    text: "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    id: "2",
    isActive: false,
    title: "Personalized Shopping",
    text: "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    id: "3",
    isActive: false,
    title: "Professional Courier",
    text: "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
  {
    id: "4",
    isActive: false,
    title: "Best Service and Lincensed",
    text: "Vestibulum congue metus quis accumsan euismod. Maecenas sed est mollis, convallis nisi convallis, imperdiet massa.",
  },
];

const Services = ({className}) => {
  return (
    <section className="py-40">
      <div className={cn(className, "site-container flex flex-col items-center gap-20")}>
        <div className="text-center flex flex-col gap-6 items-center">
          <h2 className="w-full max-w-[825px] font-urbanist text-[44px] sm:text-[56px] md:text-[64px] xl:text-[67px] font-semibold leading-tight md:leading-[135%] text-[#161b20]">
            The Bulk
            <span className="relative inline-flex z-10 mx-3">
              <div className="absolute rotate-[1.5deg] inset-0 bg-black rounded-2xl -z-10 transform -inset-x-2.5" />
              <span className="text-white">Services</span>
            </span>
            We Provide For You
          </h2>
          <p className="w-full max-w-[745px] font-gilroy text-[16px] font-normal leading-[23px] text-(--text-color)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            dolor lacus, nec ornare velit cursus sed. Cras in consectetur arcu,
            et auctor mi. Sed purus orci, sodales non metus vel, cursus bibendum
            turpis. Nam sit amet congue orci purus orci, sodales non .
          </p>
        </div>
        <ServicesCards cards={cards} />
      </div>
    </section>
  );
};

export default Services;
