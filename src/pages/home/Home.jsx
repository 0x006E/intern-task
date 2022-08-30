import React from "react";
import styled from "styled-components";
import { Advantages, Companies, Hero, Navbar } from "../../components";

const Header = styled.header`
  background-color: ${({ theme }) => theme.primary[200]};
  width: 100%;
  align-self: start;
`;
function Home() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Hero />
      <Companies />
      <Advantages />
    </>
  );
}

export default Home;
