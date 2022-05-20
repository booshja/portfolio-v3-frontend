// dependencies
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// components
import { AdminNavbar } from '../../../../components';
// styles
import { adminTheme } from '../../../../styles/themes';

const AdminLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme: t }) => t.bgPrimary};
  padding-top: 60px;
  padding-left: 175px;
`;

const AdminLayout = () => (
  <ThemeProvider theme={adminTheme}>
    <AdminLayoutContainer>
      <AdminNavbar />
    </AdminLayoutContainer>
  </ThemeProvider>
);

export default AdminLayout;
