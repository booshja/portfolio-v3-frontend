// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";

const ProjectsContainer = styled(AdminPageContainer)``;

const Projects = () => {
  useEffect(() => {
    console.log("Projects");
  }, []);
  return (
    <ProjectsContainer>
      <AdminHeadline>projects()</AdminHeadline>
    </ProjectsContainer>
  );
};

export default Projects;
