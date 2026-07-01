import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Whosale from "./components/wholesale/Wholesale";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <Whosale />
        <Services />
      </main>
    </div>
  );
};

export default App;
