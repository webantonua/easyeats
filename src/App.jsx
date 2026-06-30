import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Whosale from "./components/wholesale/Wholesale";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <Whosale />
      </main>
    </div>
  );
};

export default App;
