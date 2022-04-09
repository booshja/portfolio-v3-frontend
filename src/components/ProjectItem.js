// dependencies
import React from "react";
import styled from "styled-components";

const ProjectItemContainer = styled.li`
  border: 1px solid ${({ theme: t }) => t.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-size: 3rem;

  p {
    margin-bottom: 1.5rem;
  }
`;

const PIText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
`;

const ProjectItem = ({ project }) => (
  <ProjectItemContainer>
    <PIText>Name: {project.name}</PIText>
    <PIText>Description: {project.description}</PIText>
  </ProjectItemContainer>
);

export default ProjectItem;
