import React from "react";
import { cn } from "../../utils/cn";
import FeaturedCards from "./FeaturedCards";

const cards = [
    {
        id: "1",
        isActive: false,
        svg: "headpodes",
        title: "24/7 customer support",
    },
    {
        id: "2",
        isActive: false,
        svg: "market",
        title: "Online Shopping",
    },
    {
        id: "3",
        isActive: true,
        svg: "discount",
        title: "Weekly Discount",
    },
    {
        id: "4",
        isActive: false,
        svg: "cash",
        title: "Cash On Delivery",
    },
];

const Featured = ({ className }) => {
  return (
    <section className="py-[89px] bg-(--accent-bg-color)">
      <div className={cn(className, "flex flex-col xl:flex-row justify-between xl:items-center")}>
        <div className="">
          <h2 className="font-urbanist text-[44px] sm:text-[56px] md:text-[64px] xl:text-[67px] font-semibold leading-tight md:leading-[92px] text-[#161b20] w-full">
            Our
            <span className="block"> 
              <span className="relative inline-flex z-10 mx-4">
                <div className="absolute rotate-[-1.5deg] inset-0 bg-black rounded-2xl -z-10 transform -inset-x-5 inset-y-1" />
                <span className="text-white">Featured</span>
              </span>
            </span>
          </h2>
        </div>
        <div className="w-full h-full max-w-220">
            <FeaturedCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
