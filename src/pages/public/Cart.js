// dependencies
import React from "react";
import styled from "styled-components";
// components
import { PageContainer } from "./styles/containers";
import { PageTitle } from "./styles/typography";

const CartContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const Cart = () => {
  return (
    <CartContainer>
      <PageTitle>cart(0)</PageTitle>
    </CartContainer>
  );
};

export default Cart;
