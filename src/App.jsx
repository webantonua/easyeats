import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Whosale from "./components/wholesale/Wholesale";
import Services from "./components/services/Services";
import Featured from "./components/featured/Featured";
import Goals from "./components/goals/Goals";

const App = () => {
  return (
    <div className="">
      <Header className="site-container"  />
      <main>
        <Hero className="site-container" />
        <Whosale className="site-container" />
        <Services className="site-container" />
        <Featured className="site-container" />
        <Goals className="site-container" />
      </main>
    </div>
  );
};

export default App;
