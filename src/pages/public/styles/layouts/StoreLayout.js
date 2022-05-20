// dependencies
import React from 'react';
import styled from 'styled-components';
// components
import { Outlet } from 'react-router';
import { PageContainer } from '../containers';
import { PageTitle } from '../typography';

const StoreContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgPrimary};
`;

const StoreLayout = () => (
  <StoreContainer id="store-layout">
    <PageTitle>store()</PageTitle>
    <Outlet />
  </StoreContainer>
);

export default StoreLayout;
