import styled from "styled-components";
import Container from "../Container";

const NavWrapper = styled.nav`
  width: 100%;
`;

const Navbar = styled(Container)`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  height: 80px;
  margin: 0 auto;
`;

const NavbarList = styled.ul``;
const NavbarListItem = styled.li``;
const NavBarButton = styled.button``;

export { Navbar, NavbarList, NavbarListItem, NavBarButton, NavWrapper };
