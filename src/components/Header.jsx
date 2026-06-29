import React from "react";

const Header = () => {
  return (
    <header className="bg-[#d9faff]">
      <div className="w-315 mx-auto px-2 flex justify-between items-center py-5">
      <a href="" className="text-[38px] font-semibold">
        <span className="">Easy</span>
        <span className="text-[#16ab88]">Eats</span>
      </a>
      <nav>
        <ul className="flex flex-row gap-8">
          <li className="">
            <a href="#home" className="text-[16px] font-semibold leading-6">
              Home
            </a>
          </li>
          <li className="">
            <a href="#about" className="text-[16px] font-semibold leading-6">
              About Us
            </a>
          </li>
          <li className="">
            <a href="#service" className="text-[16px] font-semibold leading-6">
              Our Service
            </a>
          </li>
          <li className="">
            <button className="text-[16px] font-semibold leading-6">
              Pages
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </button>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
