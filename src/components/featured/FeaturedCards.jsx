import React from "react";
import { cn } from "../../utils/cn";

const FeaturedCards = ({ cards }) => {
  return (
    <ul className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between">
      {cards.map((item) => (
        <li key={item.id} className={cn("relative flex flex-col gap-4 w-full max-w-28 z-1 text-center", item.isActive && "after:[content:''] after:absolute after:-inset-15 after:bg-(--accent-select-color) after:-z-2 after:rounded-3xl")}>
          <div className="bg-white w-full h-[112px] rounded-3xl flex items-center justify-center">
            <svg
              className={cn(
                "w-14 h-14",
                "fill-(--accent-select-color) text-(--accent-select-color)",
              )}
            >
              <use href={`/images/symbol-defs.svg#icon-${item.svg}`} />
            </svg>
          </div>
          <h3 className={cn("font-urbanist font-semibold leading-[24px] text-[16px] font-features-['liga'_off,'clig'_off]", item.isActive ? "text-(--white-color)" : "text-(--title-color)")}>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default FeaturedCards;
