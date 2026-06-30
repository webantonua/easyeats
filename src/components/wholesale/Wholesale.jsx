import React, { useState } from "react";
import { cn } from "../../utils/cn";
import AboutCard from "./AboutCard";

const customers = [
  {
    id: 1,
    src: "/images/customers/customer-1.jpg",
    alt: "Customer 1",
  },
  {
    id: 2,
    src: "/images/customers/customer-2.jpg",
    alt: "Customer 2",
  },
  {
    id: 3,
    src: "/images/customers/customer-3.jpg",
    alt: "Customer 3",
  },
];

const Wholesale = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      svg: "mission",
      title: {
        before: "Our",
        after: "Mission",
      },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas nunc eget.",
    },
    {
      id: 2,
      svg: "vision",
      title: {
        before: "Our",
        after: "Vision",
      },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit suscipit egestas nunc eget.",
    },
  ]);

  return (
    <section className="bg-(--accent-bg-light-color) pt-40 pb-51.75">
      <div className="mx-auto flex w-full max-w-[1247px] flex-col justify-between px-4 sm:px-6 lg:px-8 xl:flex-row">
        <div className="flex flex-col gap-14 w-full max-w-165 py-14 px-12 bg-(--white-color) rounded-3xl">
          <div className="space-y-6">
            <h2 className="font-urbanist text-[44px] sm:text-[56px] md:text-[64px] xl:text-[80px] font-bold leading-tight md:leading-[135%] text-[#161b20] w-full">
              Finest
              <span className="relative inline-flex z-10 mx-4">
                <div className="absolute rotate-[1.5deg] inset-0 bg-black rounded-2xl -z-10 transform -inset-x-2.5" />
                <span className="text-white">Wholesale</span>
              </span>
              With Ease
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              semper dolor lacus, nec ornare velit cursus sed. Cras in
              consectetur arcu, et auctor mi. Sed purus orci, sodales non metus
              vel, cursus bibendum turpis. Nam sit amet congue orci.
            </p>
          </div>
          <AboutCard cards={cards} />
        </div>
        <div className="relative w-full max-w-118">
          <img
            src="/images/supermarket.png"
            alt="supermarket"
            className="w-full rounded-3xl object-cover"
          />
          <div className="absolute -bottom-11.75 left-1/2 transform -translate-x-1/2 p-10 bg-(--white-color) rounded-3xl z-10 w-full max-w-80.75">
            <h4 className="font-urbanist font-semibold text-[21px] leading-6 text-center">
              How many current customers sign up
            </h4>
            <ul className="relative mt-5 flex items-center justify-center -space-x-5.25 h-[79px]">
              {customers.map((customer, index) => (
                <li
                  key={customer.id}
                  className={cn(
                    "relative h-full w-[79px] overflow-hidden rounded-full border-[2px] border-white bg-gray-200",
                    index === 0 && "z-[1]",
                    index === 1 && "z-[2]",
                    index === 2 && "z-[3]",
                  )}
                >
                  <img
                    src={customer.src}
                    alt={customer.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </li>
              ))}

              <li className="relative z-[4] flex h-full w-[79px] items-center justify-center rounded-full border-[2px] border-white bg-(--accent-select-color) text-[19px] font-semibold font-poppins text-white">
                50k+
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wholesale;
