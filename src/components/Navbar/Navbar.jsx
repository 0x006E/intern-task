import React from "react";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { Navbar, NavBarButton, NavWrapper } from "./Navbar.styles";
// import {ReactComponent as LogoWhite} from '../../assets/logo-white.svg'

function Nav() {
  return (
    <NavWrapper>
      <Navbar>
        <Logo />
        <NavBarButton> 3 </NavBarButton>
      </Navbar>
    </NavWrapper>
  );
}

export default Nav;
