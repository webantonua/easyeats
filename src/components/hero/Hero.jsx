import React, { useState } from "react";
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
  {
    title: "Fresh Products",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.",
  },
  {
    title: "Fresh Products",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, velit.",
  },
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);

  const CARD_STEP = 260;
  const SLIDER_WIDTH = 650;
  const ACTIVE_CARD_WIDTH = 310;

  const isFirstCard = activeCard === 0;
  const isLastCard = activeCard === cards.length - 1;

  const totalSliderWidth = ACTIVE_CARD_WIDTH + (cards.length - 1) * CARD_STEP;
  const maxTranslate = totalSliderWidth - SLIDER_WIDTH;

  const centeredTranslate =
    activeCard * CARD_STEP - (SLIDER_WIDTH - ACTIVE_CARD_WIDTH) / 2;

  const sliderTranslate = Math.min(
    Math.max(centeredTranslate, 0),
    maxTranslate,
  );

  const changeCard = (index) => {
    setActiveCard(index);
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
    <section className="pt-28 pb-61.75 bg-(--accent-bg-color)">
      <div className="w-315 mx-auto px-2 flex justify-between items-center md:flex-row flex-col">
        <div className="flex flex-col gap-6 w-full max-w-160.75">
          <h2 className="font-urbanist text-4xl md:text-[80px] font-bold leading-tight md:leading-[135%] text-[#161b20] w-full md:max-w-160.75">
            Enjoy the Results
            <span className="block my-2">
              <span className="relative inline-flex z-10">
                <div className="absolute inset-0 bg-black rounded-2xl -z-10 transform top-3 -bottom-2 -inset-x-3.5" />
                <span className="text-white">Big Harvest</span>
              </span>
            </span>
            With Ease
          </h2>
          <p className="font-gilroy text-[16px] text-(--text-color) font-normal leading-5.75 w-full md:w-160.75">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            debitis odio, laudantium, aliquid cum fugiat eveniet laboriosam
            voluptatibus voluptas, obcaecati ipsam minus ipsa? Debitis libero
            dolor doloribus, magni maiores dolorem.
          </p>
          <button className="font-urbanist mt-8 text-[24px] leading-6 font-extrabold text-(--white-color) bg-(--accent-select-color) hover:opacity-80 transition-all cursor-pointer px-14 py-6 rounded-full self-start">
            Get Started
          </button>
        </div>
        <div className="max-w-162.5 md:-mr-16 overflow-visible">
          <div className="relative h-107.5 overflow-hidden">
            <div
              className={cn(
                "pointer-events-none absolute left-0 top-0 z-20 h-full w-24",
                "bg-linear-to-r from-(--accent-bg-color) to-transparent transition-opacity duration-300",
                activeCard > 0 ? "opacity-100" : "opacity-0",
              )}
            />
            <ul
              style={{
                transform: `translateX(-${sliderTranslate}px)`,
              }}
              className="
    flex h-full flex-row gap-10 items-end pr-16
    transition-transform duration-500 ease-in-out
  "
            >
              {cards.map((card, index) => {
                const isActive = activeCard === index;

                return (
                  <li
                    key={`${card.title}-${index}`}
                    onClick={() => changeCard(index)}
                    className={cn(
                      "shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-white",
                      "flex flex-col justify-end px-8 pb-8",
                      "transition-all duration-500 ease-in-out",
                      isActive ? "w-77.5 h-102" : "w-55 h-76.75",
                    )}
                  >
                    <h3
                      className={cn(
                        "font-urbanist font-semibold leading-8.75 line-clamp-2",
                        "transition-all duration-500 ease-in-out",
                        isActive ? "text-[28px]" : "text-[24px]",
                      )}
                    >
                      {card.title}
                    </h3>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isActive
                          ? "max-h-40 opacity-100 mt-4"
                          : "max-h-0 opacity-0 mt-0",
                      )}
                    >
                      <p className="font-gilroy text-[16px] font-normal leading-5.75 text-(--text-color) line-clamp-3">
                        {card.text}
                      </p>

                      <a
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        className="font-urbanist mt-4 inline-block text-[16px] leading-6 text-cyan-200 underline"
                      >
                        Read More...
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div
              className={cn(
                "pointer-events-none absolute right-0 top-0 z-20 h-full w-24",
                "bg-linear-to-l from-(--accent-bg-color) to-transparent transition-opacity duration-500",
                activeCard < cards.length - 1 ? "opacity-100" : "opacity-0",
              )}
            />
          </div>

          <div className="relative z-30 flex justify-end gap-10 mt-21 mr-14.5">
            <button
              onClick={handlePrev}
              type="button"
              disabled={isFirstCard}
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                isFirstCard
                  ? "bg-white cursor-not-allowed"
                  : "bg-(--accent-select-color) hover:scale-110 hover:opacity-80 cursor-pointer",
              )}
            >
              <svg
                className={cn(
                  "w-6 h-6",
                  isFirstCard ? "fill-(--accent-select-color)" : "fill-white",
                )}
              >
                <use href="/images/symbol-defs.svg#icon-arrow-left" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              type="button"
              disabled={isLastCard}
              className={cn(
                "p-3 rounded-full transition-all duration-300",
                isLastCard
                  ? "bg-white cursor-not-allowed"
                  : "bg-(--accent-select-color) hover:scale-110 hover:opacity-80 cursor-pointer",
              )}
            >
              <svg
                className={cn(
                  "w-6 h-6",
                  isLastCard ? "fill-(--accent-select-color)" : "fill-white",
                )}
              >
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
