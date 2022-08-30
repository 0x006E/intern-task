import styled from "styled-components";
import Container from "../Container";

const ADVideo = styled.div`
  width: 60%;
  height: auto;
  video {
    width: 100%;
  }
  ${({ right = false }) => right && `margin-left: auto;`}
  @media (${({ theme }) => theme.sizes.tablet}) {
    width: 90%;
  }
`;

const ADText = styled.div`
  max-width: 30rem;
  @media (${({ theme }) => theme.sizes.tablet}) {
    max-width: 32rem;
  }
  & > * {
    margin-bottom: 1rem;
  }
`;
const ADTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.3px;
  line-height: 1.185;
`;
const ADTextP = styled.p`
  font-family: ${({ theme }) => theme.fonts.circular};
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.4444;
  letter-spacing: -0.2px;
`;

const ADLink = styled.a``;
const ADWrapper = styled.div`
  font-family: ${({ theme }) => theme.fonts.base};
  display: flex;
  flex-direction: column;

  align-items: ${({ align = "start" }) => align};
  @media (${({ theme }) => theme.sizes.tablet}) {
    align-items: center;
  }
  padding: 1rem;
`;

const ADContainer = styled(Container)`
  @media (${({ theme }) => theme.sizes.desktop}) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
export { ADText, ADTitle, ADTextP, ADLink, ADWrapper, ADVideo, ADContainer };
