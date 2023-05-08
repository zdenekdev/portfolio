import React from "react";
import About from "./About";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

function Content() {
  return (
    <div className="content">
      <Hero />
      <About />
      <Portfolio />
    </div>
  );
}

export default Content;
