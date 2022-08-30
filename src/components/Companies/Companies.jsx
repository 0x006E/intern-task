import React from "react";
import Container from "../Container";
import {
  CompaniesLogo,
  CompaniesTitle,
  CompaniesWrapper,
} from "./Companies.styles";

function Companies() {
  return (
    <CompaniesWrapper>
      <Container>
        <CompaniesTitle>TRUSTED BY COMPANIES ALL OVER THE WORLD</CompaniesTitle>
        <CompaniesLogo>
          {["logo-seek", "logo-xero", "rea", "rmit", "ibm", "deliveroo"].map(
            (logo) => (
              <img src={`img/${logo}.png`} id={logo} key={logo} alt={logo} />
            )
          )}
        </CompaniesLogo>
      </Container>
    </CompaniesWrapper>
  );
}

export default Companies;
