import React from "react";
import { cn } from "../../utils/cn";

const GoalsCards = ({ cards }) => {
  return (
    <ul className={cn("flex flex-col gap-6 items-center xl:items-end")}>
      {cards.map((item) => (
        <li
          key={item.id}
          className={cn(
            "relative w-full max-w-150 xl:max-w-139.5 py-8 xl:pr-10 pr-5 xl:pl-16.25 pl-25 space-y-4 rounded-3xl",
            item.isActive
              ? "xl:mr-22.25 mr-0 bg-(--accent-select-color) shadow-[35px_15px_45px_0_rgba(0,0,0,0.09)]"
              : "bg-(--white-color) shadow-[10px_12px_25px_0_rgba(0,0,0,0.09)]",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-20 h-20 rounded-full absolute top-1/2 left-0 xl:-translate-x-1/2 translate-x-2 -translate-y-1/2",
              item.isActive
                ? "bg-(--white-color)"
                : "bg-(--accent-select-color)",
            )}
          >
            <svg
              className={cn(
                "w-10 h-10",
                item.isActive
                  ? "fill-(--accent-select-color) text-(--accent-select-color)"
                  : "fill-(--white-color) text-(--white-color)",
              )}
            >
              <use href={`/images/symbol-defs.svg#icon-${item.svg}`} />
            </svg>
          </div>
          <h2 className={cn("xl:text-[38px] text-[24px] leading-[24px] xl:leading-[48px] font-urbanist font-semibold", item.isActive ? "text-(--white-color)" : "text-(--title-color)")}>{item.title}</h2>
          <p className={cn("text-[16px] font-urbanist leading-[23px] font-normal", item.isActive ? "text-(--white-color)" : "text-(--text-color)")}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default GoalsCards;
