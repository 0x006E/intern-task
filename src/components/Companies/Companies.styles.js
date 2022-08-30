import styled from "styled-components";
import { Section } from "..";

const CompaniesWrapper = styled(Section)`
  background-color: ${({ theme }) => theme.accent.cream};
`;
const CompaniesTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.circular};
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  font-size: calc(0.875rem + (0 * (100vw - 400px) / 624));
  text-tramsform: uppercase;
  line-height: 1.25;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CompaniesLogo = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 80%;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  img {
    margin: 10px;
  }
  img#ibm {
    height: 56px;
  }
`;
export { CompaniesWrapper, CompaniesTitle, CompaniesLogo };
