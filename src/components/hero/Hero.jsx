import React, { useState } from "react";
import { cn } from "../../utils/cn";

const Hero = () => {
  const [selectedCards, setselectedCards] = useState([
    { isSelected: true },
    { isSelected: false },
  ]);

  return (
    <section className="flex justify-between items-center md:flex-row flex-col pt-28 pb-61.75 bg-blue-200">
      <div className="flex flex-col gap-6 w-full max-w-160.75">
        <h2 className="text-[80px] font-bold leading-[135%]">
          Enjoy the Results <span className="">Big Harvest</span> With Ease
        </h2>
        <p className="text-[16px] font-normal leading-5.75">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          debitis odio, laudantium, aliquid cum fugiat eveniet laboriosam
          voluptatibus voluptas, obcaecati ipsam minus ipsa? Debitis libero
          dolor doloribus, magni maiores dolorem.
        </p>
        <button className="mt-8 text-[24px] leading-6 font-extrabold text-white bg-emerald-300 px-14 py-6 rounded-full">
          Get Started
        </button>
      </div>
      <div className="">
        <ul className="flex flex-row gap-10 items-end">
          <li className={cn("flex flex-col gap-4 bg-white pt-45 px-17.75  rounded-3xl pb-14.25", selectedCards[0].isSelected ? "px-17.75" : "pl-10")}>
            <img src="" alt="" className="" />
            <h3 className="font-semibold text-[28px] leading-8.75">Groceries Vegetables</h3>
            <p
              className={cn("w-full font-normal leading-5.75 text-[16px]", selectedCards[0].isSelected ? "inline" : "hidden")}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              velit.
            </p>
            <a
              href=""
              className={cn("font-normal leading-6 text-[16px] underline text-cyan-200", selectedCards[0].isSelected ? "inline" : "hidden")}
            >
              Read More...
            </a>
          </li>
          <li className={cn("flex flex-col gap-4 bg-white pt-45 px-17.75  rounded-3xl pb-14.25", selectedCards[0].isSelected ? "px-17.75" : "pl-10")}>
            <img src="" alt="" className="" />
            <h3 className="font-semibold text-[28px] leading-8.75">Groceries Fruits</h3>
            <p
              className={cn("w-full font-normal leading-5.75 text-[16px]", selectedCards[1].isSelected ? "inline" : "hidden")}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              velit.
            </p>
            <a
              href=""
              className={ cn("font-normal leading-6 text-[16px] underline text-cyan-200",!selectedCards[1].isSelected ? "hidden" : "inline")}
            >
              Read More...
            </a>
          </li>
        </ul>
        <div className="">
          <button className={cn("p-3 bg-white color-emerald-300 rounded-full")}>{"<"}</button>
          <button className={cn("p-3 bg-emerald-300 color-white rounded-full")}>{">"}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
