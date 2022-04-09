// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";

const ProjectContainer = styled(AdminPageContainer)``;

const Project = () => {
  useEffect(() => {
    console.log("Projects");
  }, []);
  return (
    <ProjectContainer>
      <AdminHeadline>project()</AdminHeadline>
    </ProjectContainer>
  );
};

export default Project;
