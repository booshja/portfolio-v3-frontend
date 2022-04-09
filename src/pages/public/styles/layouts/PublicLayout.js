// dependencies
import React from "react";
// components
import { Outlet } from "react-router";
import { Copyright, Header, Socials } from "../../../../components";

const PublicLayout = ({ nextTheme }) => (
  <>
    <Header nextTheme={nextTheme} />
    <Socials />
    <Copyright />
    <Outlet />
  </>
);

export default PublicLayout;
