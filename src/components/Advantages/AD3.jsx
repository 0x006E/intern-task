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

function AD3() {
  return (
    <Section>
      <ADContainer>
        <ADVideo>
          <MediaQuery minWidth={768}>
            <video autoplay loop muted playsinline>
              <source src="videos/speed.webm" type="video/webm" />
            </video>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <video autoplay loop muted playsinline>
              <source src="videos/speed-mobile.webm" type="video/webm" />
            </video>
          </MediaQuery>
        </ADVideo>
        <ADWrapper>
          <ADText>
            <ADTitle>Move faster with your tools in one place</ADTitle>
            <ADTextP>
              In Slack, you’ve got all the flexibility to work when, where and
              how it’s best for you. You can easily chat, send audio and video
              clips, or join a huddle to talk things through live.
            </ADTextP>
            <ADLink>Learn more about the Slack platform</ADLink>
          </ADText>
        </ADWrapper>
      </ADContainer>
    </Section>
  );
}

export default AD3;
