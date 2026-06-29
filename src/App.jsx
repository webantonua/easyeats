import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
