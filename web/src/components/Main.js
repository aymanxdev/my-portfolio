import React from "react";
import About from "./About";
import BottomNav from "./BottomNav";
import Hero from "./Hero";
import SideBar from "./SideBar";
import Skills from "./Skills";

const Main = () => {
  return (
    <>
      <SideBar />
      <Hero />
      <About />
      <Skills />
      <BottomNav />
    </>
  );
};

export default Main;
