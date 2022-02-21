// dependencies
import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgPrimary};
  margin-top: -60px;
`;

const MyName = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: 5%;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.textPrimary};
`;

const LandingDivider = styled.div`
  width: 45%;
  height: 4px;
  background-color: ${(props) => props.theme.accent};
  margin-bottom: 3rem;
`;

const MyTitle = styled.p`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 2.5%;
  color: ${(props) => props.theme.textSecondary};
`;

const Is = () => {
  return (
    <PageContainer>
      <MyName>Jacob Andes</MyName>
      <LandingDivider />
      <MyTitle>Full Stack Software Engineer</MyTitle>
    </PageContainer>
  );
};

export default Is;
