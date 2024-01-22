import styled from "styled-components";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-01);
  max-width: 120rem;
  margin: 0 auto;
`;
const Navlist = styled.ul`
  display: flex;
  align-items: center;
  gap: 4rem;
  list-style: none;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-primary-01);
    font-family: "Candal", sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
    transition: all 0.3s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary-02);
  }
`;

function PageNav() {
  return (
    <Nav>
      <Logo />
      <Navlist>
        <li>
          <StyledNavLink to="/strona-glowna">Start</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/o-mnie">o mnie</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/oferta">oferta</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/poradnik">poradnik</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/galeria">galeria</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/kontakt">kontakt</StyledNavLink>
        </li>
      </Navlist>
    </Nav>
  );
}

export default PageNav;
