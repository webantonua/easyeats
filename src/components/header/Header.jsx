import React from "react";

const Header = () => {
  return (
    <header className="bg-[#d9faff]">
      <div className="site-container flex items-center justify-between gap-12 flex-row">
      <a href="" className="text-[38px] font-semibold">
        <span className="">Easy</span>
        <span className="text-[#16ab88]">Eats</span>
      </a>
      <nav>
        <ul className="flex-row gap-8 hidden sm:flex">
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
        <button className="flex sm:hidden">Burger</button>
      </nav>
      </div>
    </header>
  );
};

export default Header;
