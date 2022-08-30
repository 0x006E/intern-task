import styled from "styled-components";
import Container from "../Container";

const HeroWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.primary[200]};
  padding: 3rem 0;
  padding-top: 0;
`;
const HeroContainer = styled(Container)`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 2%;

  @media (${({ theme }) => theme.sizes.tablet}) {
    grid-template-columns: 53% 45%;
    grid-column-gap: 2%;
    grid-row-gap: 0;
    grid-template-rows: auto;
  }
`;
const HeroText = styled.div`
  color: white;
  width: 100%;
  place-self: center;
`;
const HeroTextWrapper = styled.div`
  color: white;
  width: 100%;
  padding-left: 1rem;
  place-self: center;
`;
const HeroTextP = styled.p`
  font-size: calc(1.125rem + (2 * (100vw - 400px) / 624));
  font-weight: 400;
  line-height: 1.333;
  text-align: center;
`;

const HeroVideo = styled.div`
  place-self: center;
  @media (${({ theme }) => theme.sizes.tablet}) {
    place-self: start;
  }
  video {
    max-width: 700px;
    max-height: 400px;
    min-width: 560px;
    height: auto;

    @media (${({ theme }) => theme.sizes.tablet}) {
      height: auto;
      width: auto;
    }
  }
`;

export {
  HeroWrapper,
  HeroContainer,
  HeroText,
  HeroTextWrapper,
  HeroTextP,
  HeroVideo,
};
