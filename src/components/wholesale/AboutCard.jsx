import React from "react";
import { cn } from "../../utils/cn";

const AboutCard = ({ cards }) => {
  return (
    <ul className="flex gap-8 md:gap-12 flex-col md:flex-row justify-between">
      {cards.map(({ id, svg, title, text }) => (
        <li className="py-10 px-6 w-full shadow-[10px_12px_25px_0_rgba(0,0,0,0.09)] rounded-2xl" key={id}>
          <svg className={cn("w-12 h-12 fill-(--accent-select-color)")}>
            <use href={`/images/symbol-defs.svg#icon-${svg}`} />
          </svg>
          <h3 className="font-urbanist font-semibold text-[28px] mt-6 mb-4 text-(--title-color)">{title.before}{" "}<span className="text-(--accent-select-color)">{title.after}</span></h3>
          <p className="font-gilroy font-normal text-[14px] md:text-[16px] text-(--text-color)">{text}</p>
        </li>
      ))}
    </ul>
  );
};

export default AboutCard;
