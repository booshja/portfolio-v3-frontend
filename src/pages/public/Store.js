// dependencies
import React from "react";
import styled from "styled-components";
// components
import { PageContainer } from "./styles/containers";
import { PageTitle } from "./styles/typography";

const StoreContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const Store = () => {
  return (
    <StoreContainer>
      <PageTitle>store()</PageTitle>
    </StoreContainer>
  );
};

export default Store;
