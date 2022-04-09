// dependencies
import React from "react";
import { useTheme } from "styled-components";
import { useLocation } from "react-router";
// assets
import { faMountain } from "@fortawesome/free-solid-svg-icons";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContainer, Nav } from "./styles/containers";
import { WebsiteName, StyledNavLink } from "./styles/typography";
import { NavButton } from "./styles/buttons";

const Header = ({ nextTheme, notFound }) => {
  const theme = useTheme();
  const location = useLocation();

  const makeBreadcrumbs = (pathname) => {
    if (notFound) return "notFound()";
    if (pathname === "/") return "is()";

    const slicedPath = pathname.slice(1);
    const splitPath = slicedPath.split("/");
    let breadcrumbs = `${splitPath[0]}()`;
    if (splitPath.length > 1) {
      for (let i = 1; i < splitPath.length; i + 1) {
        breadcrumbs = `${breadcrumbs}.${splitPath[i]}`;
      }
    }

    return breadcrumbs;
  };

  return (
    <HeaderContainer>
      <WebsiteName to="/">
        JacobAndes.
        {makeBreadcrumbs(location.pathname)}
      </WebsiteName>
      <Nav>
        <StyledNavLink to="/">.is()</StyledNavLink>
        <StyledNavLink to="/experience">.experience()</StyledNavLink>
        <StyledNavLink to="/about">.about()</StyledNavLink>
        <StyledNavLink to="/contact">.contact()</StyledNavLink>
        <StyledNavLink to="/store">.store()</StyledNavLink>
        <NavButton onClick={nextTheme}>
          <FontAwesomeIcon icon={faMountain} />
          {` ${theme.themeName}`}
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
