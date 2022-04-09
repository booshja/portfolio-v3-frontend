// dependencies
import React from "react";
import styled from "styled-components";
// assets
import {
  faHouseDamage,
  faEnvelopeOpenText,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";
import { faInternetExplorer } from "@fortawesome/free-brands-svg-icons";
// components
import { Outlet, useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WebsiteName } from "./styles/typography";

const SideNav = styled.nav`
  background-color: ${(props) => props.theme.bgSecondary};
  min-height: 100vh;
  height: 100%;
  width: 175px;
  display: flex;
  flex-direction: column;
  padding: calc(60px + 2rem) 2rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
const TopNav = styled.div`
  background-color: ${(props) => props.theme.bgSecondary};
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 2rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(NavLink)`
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;

  & p {
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
      </TopNav>
      <SideNav>
        <NavList>
          <li>
            <NavItem to="/admin">
              <FontAwesomeIcon icon={faHouseDamage} />
              <p>Dashboard</p>
            </NavItem>
          </li>
          <li>
            <NavItem to="/admin/messages">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <p>Messages</p>
            </NavItem>
          </li>
          <li>
            <NavItem to="/admin/projects">
              <FontAwesomeIcon icon={faInternetExplorer} />
              <p>Projects</p>
            </NavItem>
          </li>
          <li>
            <NavItem to="/admin/orders">
              <FontAwesomeIcon icon={faCartFlatbed} />
              <p>Orders</p>
            </NavItem>
          </li>
        </NavList>
      </SideNav>
      <Outlet />
    </>
  );
};

export default AdminNavbar;
