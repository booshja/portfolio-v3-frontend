// dependencies
import React from "react";
import styled from "styled-components";
// components
import { PageContainer } from "./styles/containers";
import { PageTitle } from "./styles/typography";

const StoreContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const ComingSoonText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 4rem;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const Store = () => {
  return (
    <StoreContainer>
      <PageTitle>store()</PageTitle>
      <ComingSoonText>Coming soon...</ComingSoonText>
    </StoreContainer>
  );
};

export default Store;
