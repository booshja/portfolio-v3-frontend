// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { PageContainer, MainContent } from "./styles/containers";
import { LoadingSpinner } from "../../components";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading");
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <StoreContainer>
        <PageTitle>store()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </StoreContainer>
    );
  }

  return (
    <StoreContainer>
      <PageTitle>store()</PageTitle>
      <MainContent className="slide-in-left">
        <ComingSoonText>Coming soon&hellip;</ComingSoonText>
      </MainContent>
    </StoreContainer>
  );
};

export default Store;
