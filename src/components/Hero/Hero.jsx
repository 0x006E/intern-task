import React from "react";
import MediaQuery from "react-responsive";
import Button from "../Button";
import H1 from "../H1";
import {
  ButtonWrapper,
  HeroContainer,
  HeroText,
  HeroTextP,
  HeroTextWrapper,
  HeroVideo,
  HeroWrapper,
  YellowSpan,
} from "./Hero.styles";

function Hero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroText>
          <HeroTextWrapper>
            <H1>
              Great teamwork starts with a <YellowSpan>digital HQ</YellowSpan>
            </H1>
            <HeroTextP>
              With all your people, tools and communication in one place, you
              can work faster and more flexibly than ever before.
            </HeroTextP>
            <ButtonWrapper>
              <MediaQuery maxWidth={767}>
                {(matches) => (
                  <Button fullWidth={matches}>
                    Sign up with email address
                  </Button>
                )}
              </MediaQuery>
            </ButtonWrapper>
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
