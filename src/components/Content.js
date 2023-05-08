import React from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

function Content() {
  return (
    <div className="content">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Content;
