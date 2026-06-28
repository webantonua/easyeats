import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
