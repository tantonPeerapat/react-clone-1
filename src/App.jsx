import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
    </>
  );
};

export default App;
