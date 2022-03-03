// dependencies
import React from "react";
import styled from "styled-components";
// components
import { PageContainer, LandingDivider } from "./styles/containers";
import { MyName, MyTitle } from "./styles/typography";

const IsPageContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
  justify-content: center;
  align-items: center;
  padding: 0;
  min-height: 100vh;
`;

const Is = () => {
  return (
    <IsPageContainer>
      <MyName>Jacob Andes</MyName>
      <LandingDivider />
      <MyTitle>Full Stack Software Engineer</MyTitle>
    </IsPageContainer>
  );
};

export default Is;
