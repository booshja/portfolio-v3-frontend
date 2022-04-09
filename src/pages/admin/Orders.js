// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";

const OrdersContainer = styled(AdminPageContainer)``;

const Orders = () => {
  useEffect(() => {
    console.log("Orders");
  }, []);
  return (
    <OrdersContainer>
      <AdminHeadline>orders()</AdminHeadline>
    </OrdersContainer>
  );
};

export default Orders;
