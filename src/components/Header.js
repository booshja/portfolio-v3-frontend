// dependencies
import React from "react";
import { useTheme } from "styled-components";
import { useLocation } from "react-router";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, Nav } from "./styles/containers";
import { WebsiteName, StyledNavLink } from "./styles/typography";
import { NavButton } from "./styles/buttons";
// assets
import { faMountain } from "@fortawesome/free-solid-svg-icons";

const Header = ({ nextTheme }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <HeaderContainer>
      <WebsiteName to="/">
        JacobAndes.
        {location.pathname === "/" ? "is" : location.pathname.slice(1)}( )
      </WebsiteName>
      <Nav>
        <StyledNavLink to="/">.is()</StyledNavLink>
        <StyledNavLink to="/experience">.experience()</StyledNavLink>
        <StyledNavLink to="/about">.about()</StyledNavLink>
        <StyledNavLink to="/contact">.contact()</StyledNavLink>
        <StyledNavLink to="/store">.store({0})</StyledNavLink>
        <NavButton onClick={nextTheme}>
          <FontAwesomeIcon icon={faMountain} />
          {" " + theme.themeName}
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
