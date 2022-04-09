// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";

const OrderContainer = styled(AdminPageContainer)``;

const Order = () => {
  useEffect(() => {
    console.log("Order");
  }, []);
  return (
    <OrderContainer>
      <AdminHeadline>order()</AdminHeadline>
    </OrderContainer>
  );
};

export default Order;
