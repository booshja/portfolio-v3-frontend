// dependencies
import React from "react";
import styled from "styled-components";
// assets
import {
  faHouseDamage,
  faEnvelopeOpenText,
  faCartFlatbed,
  faSkullCrossbones,
} from "@fortawesome/free-solid-svg-icons";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
// components
import { Outlet, useLocation } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WebsiteName } from "./styles/typography";

const SideNav = styled.nav`
  background-color: ${({ theme: t }) => t.bgSecondary};
  min-height: 100vh;
  height: 100%;
  width: 175px;
  display: flex;
  flex-direction: column;
  padding-block: calc(60px + 2rem) 2rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
const TopNav = styled.div`
  background-color: ${({ theme: t }) => t.bgSecondary};
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  font-size: 1.8rem;
  color: ${({ theme: t }) => t.black};
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
  font-size: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavLi = styled.li``;

const NavItem = styled(NavLink)`
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  width: 100%;

  p {
    font-size: 2.5rem;
    margin-top: 0.5rem;
  }
`;

const AdminNavbar = () => {
  const location = useLocation();

  const makeBreadcrumbs = (pathname) => {
    if (pathname === "/admin" || pathname === "/admin/") return "dashboard()";

    const slicedPath = pathname.slice(7);
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
    <>
      <TopNav>
        <WebsiteName to="/admin">
          admin.
          {makeBreadcrumbs(location.pathname)}
        </WebsiteName>
        <StyledLink to="/admin">
          <StyledIcon icon={faSkullCrossbones} /> Log Out
        </StyledLink>
      </TopNav>
      <SideNav>
        <NavList>
          <NavLi>
            <NavItem to="/admin">
              <FontAwesomeIcon icon={faHouseDamage} />
              <p>Dashboard</p>
            </NavItem>
          </NavLi>
          <NavLi>
            <NavItem to="/admin/messages">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <p>Messages</p>
            </NavItem>
          </NavLi>
          <NavLi>
            <NavItem to="/admin/projects">
              <FontAwesomeIcon icon={faInternetExplorer} />
              <p>Projects</p>
            </NavItem>
          </NavLi>
          <NavLi>
            <NavItem to="/admin/orders">
              <FontAwesomeIcon icon={faCartFlatbed} />
              <p>Orders</p>
            </NavItem>
          </NavLi>
        </NavList>
      </SideNav>
      <Outlet />
    </>
  );
};

export default AdminNavbar;
