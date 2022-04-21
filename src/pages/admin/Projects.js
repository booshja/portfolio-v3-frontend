// dependencies
import React from "react";
import { useNavigate } from "react-router";
import { v4 as randomId } from "uuid";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";
import { ProjectItem, Project, LoadingSpinner } from "../../components";
// services
import { useGetProjectsQuery } from "../../services/booshjaAPI";

const ProjectsContainer = styled(AdminPageContainer)`
  padding: 2rem;
`;

const ProjectsList = styled.ul`
  padding: 2rem;
  width: 80%;
`;

const ErrorMessage = styled.p`
  font-size: 3rem;
  color: white;
`;

const Projects = () => {
  const { data, isFetching, isSuccess, isError, error } = useGetProjectsQuery();
  const navigate = useNavigate();

  if (isFetching) return <LoadingSpinner />;

  let content;

  if (isSuccess) {
    if (data.projects.length) {
      content = (
        <ProjectsList>
          {data.projects.map((project) => (
            <ProjectItem project={project} key={randomId()} />
          ))}
        </ProjectsList>
      );
    } else {
      content = (
        <ProjectsList>
          <ErrorMessage>No projects found!</ErrorMessage>
        </ProjectsList>
      );
    }
  } else if (isError) {
    navigate("/error");
  }

  return (
    <ProjectsContainer>
      <AdminHeadline>projects()</AdminHeadline>
      {content}
    </ProjectsContainer>
  );
};

export default Projects;
