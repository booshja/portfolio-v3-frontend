// dependencies
import React from "react";
import { Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
// styles
import { adminTheme } from "../../../../styles/themes";

const AdminLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const AdminLayout = () => (
  <ThemeProvider theme={adminTheme}>
    <AdminLayoutContainer>
      {/* <AdminNavbar /> */}
      <Outlet />
    </AdminLayoutContainer>
  </ThemeProvider>
);

export default AdminLayout;
