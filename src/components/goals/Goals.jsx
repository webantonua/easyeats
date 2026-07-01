import React from "react";
import { cn } from "../../utils/cn";
import GoalsCards from "./GoalsCards";

const goals = [
  {
    id: "1",
    svg: "like",
    isActive: false,
    title: "Customer Satisfaction",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec ornare velit cursus sed.",
  },
  {
    id: "2",
    svg: "human",
    isActive: true,
    title: "Convenience Accessibility",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec ornare velit cursus sed.",
  },
  {
    id: "3",
    svg: "reward",
    isActive: false,
    title: "Quality and Freshness",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper dolor lacus, nec ornare velit cursus sed.",
  },
];

const Goals = ({ className }) => {
  return (
    <section className="pt-34.75 pb-36 bg-(--accent-bg-light-color) overflow-hidden">
      <div
        className={cn(className, "flex flex-col xl:flex-row items-center xl:gap-0 gap-20 justify-between")}
      >
        <div className="w-full max-w-150 xl:max-w-125 space-y-6">
          <h2 className="font-urbanist text-[44px] sm:text-[56px] md:text-[64px] xl:text-[67px] font-semibold leading-tight md:leading-[92px] text-[#161b20] w-full">
            <span className="relative inline-flex z-10 mx-7">
              <div className="absolute rotate-[1.5deg] inset-0 bg-black rounded-2xl -z-10 transform -inset-x-5 inset-y-1" />
              <span className="text-white">Goals</span>
            </span>
            Of Our Wholesale Company
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper
            dolor lacus, nec ornare velit cursus sed. Cras in consectetur arcu,
            et auctor mi. Sed purus orci, sodales non metus vel Caras insdk.
          </p>
        </div>

        <div className="relative isolate">
          <div
            className={cn(
              "hidden xl:block",
              "absolute top-1/2 -translate-y-1/2 left-45 right-[calc(50%-50vw)] h-101.5",
              "rounded-3xl overflow-hidden -z-1 pointer-events-none",
              "bg-(--accent-bg-color)",
            )}
          />
          <GoalsCards cards={goals} />
        </div>
      </div>
    </section>
  );
};

export default Goals;
