// dependencies
import React from 'react';
import styled from 'styled-components';
// components
import { Link } from 'react-router-dom';

const ProjectItemContainer = styled.li`
  border: 1px solid ${({ theme: t }) => t.white};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-size: 3rem;
`;

const PIText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const PILink = styled(Link)`
  color: ${({ theme: t }) => t.accent};
  text-decoration: underline;
  font-size: 2rem;
  line-height: 1.5;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

const ProjectItem = ({ project }) => (
  <ProjectItemContainer>
    <PIText>Name: {project.name}</PIText>
    <PIText>Description: {project.description}</PIText>
    <PILink to={`${project.id}`}>View/Edit Project</PILink>
  </ProjectItemContainer>
);

export default ProjectItem;
