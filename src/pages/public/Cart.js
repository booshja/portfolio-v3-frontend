// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { PageContainer, MainContent } from "./styles/containers";
import { LoadingSpinner } from "../../components";
import { PageTitle } from "./styles/typography";

const CartContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const Cart = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading");
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <MainContent>
        <LoadingSpinner />
      </MainContent>
    );
  }
  return (
    <CartContainer>
      <PageTitle>cart(0)</PageTitle>
    </CartContainer>
  );
};

export default Cart;
