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
];

const Hero = () => {
  const [activeCard, setActiveCard] = useState(0);
  const sliderRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  const CARD_STEP = 260;
  const SLIDER_WIDTH = 650;
  const ACTIVE_CARD_WIDTH = 310;
  const SLIDER_END_PADDING = 64;

  const isFirstCard = activeCard === 0;
  const isLastCard = activeCard === cards.length - 1;

  const totalSliderWidth =
    ACTIVE_CARD_WIDTH + (cards.length - 1) * CARD_STEP + SLIDER_END_PADDING;
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

  const handleMobileScroll = () => {
    if (window.innerWidth >= 768) return;

    clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((_, index) => {
        const card = slider.querySelector(`[data-card-index="${index}"]`);
        if (!card) return;

        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    }, 0);
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
    <section className="overflow-hidden bg-(--accent-bg-color) pt-20 pb-20 md:pt-24 md:pb-28 xl:pt-28 xl:pb-61.75">
      <div className="mx-auto flex w-full max-w-[1247px] flex-col items-center justify-between gap-12 px-4 sm:px-6 lg:px-8 xl:flex-row">
        <div className="flex w-full max-w-[643px] flex-col gap-6">
          <h2 className="font-urbanist text-[44px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-bold leading-tight md:leading-[135%] text-[#161b20] w-full">
            Enjoy the Results
            <span className="block my-2">
              <span className="relative inline-flex z-10">
                <div className="absolute inset-0 bg-black rounded-3xl -z-10 transform top-1 -bottom-2 -inset-x-3.5" />
                <span className="text-white">Big Harvest</span>
              </span>
            </span>
            With Ease
          </h2>
          <p className="font-gilroy w-full text-[16px] font-normal leading-5.75 text-(--text-color)">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            debitis odio, laudantium, aliquid cum fugiat eveniet laboriosam
            voluptatibus voluptas, obcaecati ipsam minus ipsa? Debitis libero
            dolor doloribus, magni maiores dolorem.
          </p>
          <button className="font-urbanist mt-4 cursor-pointer self-start rounded-full bg-(--accent-select-color) px-8 py-4 text-lg font-extrabold leading-6 text-(--white-color) transition-all hover:opacity-80 sm:px-10 sm:py-5 sm:text-xl xl:mt-8 xl:px-14 xl:py-6 xl:text-[24px]">
            Get Started
          </button>
        </div>
        <div className="w-full overflow-visible">
          <div className="w-full overflow-visible md:mx-auto md:max-w-[650px]">
            <div
              ref={sliderRef}
              onScroll={handleMobileScroll}
              className="relative h-[340px] w-screen overflow-x-auto overflow-y-hidden overscroll-x-contain sm:h-[390px] md:h-[430px] md:w-full md:overflow-hidden max-md:-mx-4"
            >
              <div
                className={cn(
                  "pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-10 md:block",
                  "bg-linear-to-r from-(--accent-bg-color) to-transparent transition-opacity duration-300",
                  activeCard > 0 ? "opacity-100" : "opacity-0",
                )}
              />
              <ul
                style={{
                  "--slider-translate": `-${sliderTranslate}px`,
                }}
                className="
    flex h-full w-max flex-row items-end gap-5
  transition-transform duration-500 ease-in-out
  max-md:snap-x max-md:snap-mandatory max-md:px-[calc((100vw-240px)/5)]
  sm:gap-8
  md:gap-10 md:pr-0 md:[transform:translateX(var(--slider-translate))]
"
              >
                {cards.map((card, index) => {
                  const isActive = activeCard === index;

                  return (
                    <li
                      key={`${card.title}-${index}`}
                      data-card-index={index}
                      onClick={() => {
                        if (window.innerWidth >= 768) changeCard(index);
                      }}
                      className={cn(
                        "shrink-0 snap-center cursor-pointer overflow-hidden rounded-3xl bg-white",
                        "flex flex-col justify-end px-5 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8",
                        "transition-all duration-500 ease-in-out",
                        isActive
                          ? "h-[300px] w-[240px] sm:h-[360px] sm:w-[280px] md:h-102 md:w-77.5"
                          : "h-[260px] w-[210px] sm:h-[300px] sm:w-[230px] md:h-76.75 md:w-55",
                      )}
                    >
                      <h3
                        className={cn(
                          "font-urbanist font-semibold leading-8.75 line-clamp-2",
                          "transition-all duration-500 ease-in-out",
                          isActive
                            ? "text-[22px] sm:text-[24px] md:text-[28px]"
                            : "text-[20px] sm:text-[22px] md:text-[24px]",
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
                  "pointer-events-none absolute right-0 top-0 z-20 hidden h-full w-10 md:block",
                  "bg-linear-to-l from-(--accent-bg-color) to-transparent transition-opacity duration-500",
                  activeCard < cards.length - 1 ? "opacity-100" : "opacity-0",
                )}
              />
            </div>
          </div>

          <div className="relative z-30 mt-8 hidden justify-center gap-10 md:flex xl:mr-14.5 xl:mt-21 xl:justify-end">
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
