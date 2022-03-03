// dependencies
import React from "react";
import styled from "styled-components";
// components
import { PageContainer } from "./styles/containers";
import { PageTitle } from "./styles/typography";

const AboutContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const About = () => {
  return (
    <AboutContainer>
      <PageTitle>about()</PageTitle>
    </AboutContainer>
  );
};

export default About;
