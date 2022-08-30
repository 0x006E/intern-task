import React from "react";
import styled from "styled-components";
import AD1 from "./AD1";
import AD2 from "./AD2";
import AD3 from "./AD3";

const AdvantagesWrapper = styled.div`
  margin-top: -3rem;
  background-color: ${({ theme }) => theme.accent.cream};
`;

function Advantages() {
  return (
    <AdvantagesWrapper>
      <AD1 />
      <AD2 />
      <AD3 />
    </AdvantagesWrapper>
  );
}

export default Advantages;
