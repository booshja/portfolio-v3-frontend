// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Outlet } from "react-router";
import { PageContainer } from "../containers";

const CartContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgPrimary};
`;

const CartLayout = () => (
  <CartContainer>
    <Outlet />
  </CartContainer>
);

export default CartLayout;
