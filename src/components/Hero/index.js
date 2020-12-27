import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../SIdebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Greatest Pizza on Jkt</HeroH1>
            <HeroP>Ready in 5 Minus</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;
