import React from "react";
import H1 from "../H1";
import {
  HeroContainer,
  HeroText,
  HeroTextP,
  HeroTextWrapper,
  HeroVideo,
  HeroWrapper,
} from "./Hero.styles";

function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroText>
          <HeroTextWrapper>
            <H1>Great teamwork starts with a digital HQ</H1>
            <HeroTextP>
              With all your people, tools and communication in one place, you
              can work faster and more flexibly than ever before.
            </HeroTextP>
            <button>Sign up with email address</button>
            <button>Sign up using Google</button>
          </HeroTextWrapper>
        </HeroText>
        <HeroVideo>
          <video autoPlay={true} loop={true} id="intro">
            <source src="videos/hero-product-ui.webm" type="video/webm" />
          </video>
        </HeroVideo>
      </HeroContainer>
    </HeroWrapper>
  );
}

export default Hero;
