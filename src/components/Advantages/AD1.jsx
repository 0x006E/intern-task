import React from "react";
import MediaQuery from "react-responsive";
import Section from "../Section";
import {
  ADContainer,
  ADLink,
  ADText,
  ADTextP,
  ADTitle,
  ADVideo,
  ADWrapper,
} from "./AD.styles";

function AD1() {
  return (
    <Section>
      <ADContainer>
        <ADVideo>
          <MediaQuery minWidth={768}>
            <video autoPlay loop muted playsInline>
              <source src="videos/connectedness.webm" type="video/webm" />
            </video>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <video autoPlay loop muted playsInline>
              <source
                src="videos/connectedness-mobile.webm"
                type="video/webm"
              />
            </video>
          </MediaQuery>
        </ADVideo>
        <ADWrapper>
          <ADText>
            <ADTitle>Bring your team together</ADTitle>
            <ADTextP>
              At the heart of Slack are channels: organised spaces for everyone
              and everything that you need for work. In channels, it’s easier to
              connect across departments, offices, time zones and even other
              companies.
            </ADTextP>
            <ADLink>Learn more about channels</ADLink>
          </ADText>
        </ADWrapper>
      </ADContainer>
    </Section>
  );
}

export default AD1;
