import React, { useRef } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Freebook from "./Freebook";
import Footer from "./Footer";
import About from "./About";

function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar onAboutClick={scrollToAbout} />
      <Banner />
      <Freebook />
      <div ref={aboutRef}>
        <About />
      </div>
      <Footer />
    </>
  );
}

export default Home;
