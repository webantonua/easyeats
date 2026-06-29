import React, { useRef, useState } from "react";
import { cn } from "../../utils/cn";

const cards = [
  {
    title: "Groceries Vegetables",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.",
  },
  {
    title: "Groceries Fruits",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.",
  },
  {
    title: "Fresh Products",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.",
  },
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef([]);

  const isFirstCard = activeCard === 0;
  const isLastCard = activeCard === cards.length - 1;

  const changeCard = (index) => {
    setActiveCard(index);

    cardsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const handlePrev = () => {
    if (isFirstCard) return;

    changeCard(activeCard - 1);
  };

  const handleNext = () => {
    if (isLastCard) return;

    changeCard(activeCard + 1);
  };

  return (
    <section className="pt-28 pb-61.75 bg-[#d9faff]">
      <div className="w-315 mx-auto px-2 flex justify-between items-center md:flex-row flex-col">
        <div className="flex flex-col gap-6 w-full max-w-160.75">
          <h2 className="text-4xl md:text-[80px] font-bold leading-tight md:leading-[135%] text-[#161b20] w-full md:max-w-160.75">
            Enjoy the Results
            <span className="block my-2">
              <span className="relative inline-flex z-10">
                <div className="absolute inset-0 bg-black rounded-2xl -z-10 transform top-4 -bottom-2 -inset-x-2" />
                <span className="text-white">Big Harvest</span>
              </span>
            </span>
            With Ease
          </h2>
          <p className="text-[16px] text-[#666666] font-normal leading-5.75 w-full md:w-160.75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            debitis odio, laudantium, aliquid cum fugiat eveniet laboriosam
            voluptatibus voluptas, obcaecati ipsam minus ipsa? Debitis libero
            dolor doloribus, magni maiores dolorem.
          </p>
          <button className="mt-8 text-[24px] leading-6 font-extrabold text-white bg-[#16ab88] hover:opacity-80 transition-all cursor-pointer px-14 py-6 rounded-full self-start">
            Get Started
          </button>
        </div>
        <div className="max-w-[650px] md:-mr-16 overflow-visible">
          <div className="relative overflow-visible">
            <div
              className={cn(
                "pointer-events-none absolute left-0 top-0 z-20 h-full w-20",
                "bg-gradient-to-r from-[#d9faff] to-transparent transition-opacity duration-300",
                activeCard > 0 ? "opacity-100" : "opacity-0",
              )}
            />

            <ul
              className="
        flex flex-row gap-10 items-end overflow-x-auto scroll-smooth pb-4 pr-16
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      "
            >
              {cards.map((card, index) => {
                const isActive = activeCard === index;

                return (
                  <li
                    key={card.title}
                    ref={(el) => (cardsRef.current[index] = el)}
                    onClick={() => changeCard(index)}
                    className={cn(
                      "flex flex-col gap-4 bg-white pt-45 rounded-3xl pb-14.25 overflow-hidden shrink-0",
                      "transition-all duration-500 ease-in-out",
                      isActive ? "w-[310px] px-17.75" : "w-[220px] px-10",
                    )}
                  >
                    <h3
                      className={cn(
                        "font-semibold leading-8.75 transition-all duration-500 ease-in-out",
                        isActive ? "text-[28px]" : "text-[22px]",
                      )}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={cn(
                        "w-full font-normal leading-5.75 text-[16px] overflow-hidden",
                        "transition-all duration-500 ease-in-out",
                        isActive
                          ? "max-h-32 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2",
                      )}
                    >
                      {card.text}
                    </p>

                    <a
                      href=""
                      className={cn(
                        "font-normal leading-6 text-[16px] underline text-cyan-200 overflow-hidden",
                        "transition-all duration-500 ease-in-out",
                        isActive
                          ? "max-h-10 opacity-100 translate-y-0"
                          : "max-h-0 opacity-0 -translate-y-2",
                      )}
                    >
                      Read More...
                    </a>
                  </li>
                );
              })}
            </ul>

            <div
              className={cn(
                "pointer-events-none absolute right-0 top-0 z-20 h-full w-24",
                "bg-gradient-to-l from-[#d9faff] to-transparent transition-opacity duration-300",
                activeCard < cards.length - 1 ? "opacity-100" : "opacity-0",
              )}
            />
          </div>

          <div className="relative z-30 flex justify-end gap-4 mt-8">
            <button
              onClick={handlePrev}
              type="button"
              disabled={isFirstCard}
              className={cn(
                "p-3 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80",
                isFirstCard
                  ? "bg-white text-white cursor-not-allowed"
                  : "bg-[#16ab88] text-white hover:scale-110",
              )}
            >
              <svg className={cn(
                "fill-red w-6 h-6",
                isFirstCard
                  ? "fill-[#16ab88]"
                  : "fill-white",
              )}>
                <use href="/images/symbol-defs.svg#icon-arrow-left" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              type="button"
              disabled={isLastCard}
              className={cn(
                "p-3 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80",
                isLastCard
                  ? "bg-white text-white cursor-not-allowed"
                  : "bg-[#16ab88] text-white hover:scale-110",
              )}
            >
              <svg className={cn(
                "fill-red w-6 h-6",
                isLastCard
                  ? "fill-[#16ab88]"
                  : "fill-white",
              )} >
                <use href="/images/symbol-defs.svg#icon-arrow-right" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
