import React from "react";
import { cn } from "../../utils/cn";

const ServicesCards = ({ cards }) => {
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {cards.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "p-10 rounded-3xl space-y-4 text-center transition-all duration-300",
            item.isActive ? "shadow-[18px_15px_35px_0_rgba(0,0,0,0.09)] bg-(--accent-select-color)" : "shadow-[10px_12px_25px_0_rgba(0,0,0,0.09)] bg-(--white-color)",

        index === cards.length - 1 && "lg:col-start-2 xl:col-start-auto"
          )}
        >
          <h3 className={cn(
            "text-[28px] font-semibold leading-[35px]",
            item.isActive ? "text-(--white-color)" : "text-(--title-color)"
          )}>{item.title}</h3>
          <p  className={cn(
            "text-[16px] font-normal leading-[23px] font-features-['liga'_off,_'clig'_off]",
            item.isActive ? "text-(--white-color)" : "text-(--text-color)"
          )}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ServicesCards;
