// dependencies
import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { AdminHeadline } from "./styles/typography";
import { AdminPageContainer } from "./styles/containers";
import { ProjectItem } from "../../components";

// DUMMY DATA
const dummyData = [
  {
    id: 1,
    name: "Project 1",
    description:
      "This was a project that I really enjoyed doing. It was a project that projected to project very well!",
    tags: {
      tags: [
        "javascript",
        "react",
        "node",
        "express",
        "styled-components",
        "postgres",
      ],
    },
    thoughts:
      "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
    image_url:
      "https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80",
    github_url: "https://github.com/booshja/portfolio-v3-frontend",
    live_url: "https://jacobandes.dev",
    position: 1,
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "This was a project that I really enjoyed doing. It was a project that projected to project very well!",
    tags: {
      tags: [
        "javascript",
        "react",
        "node",
        "express",
        "styled-components",
        "postgres",
      ],
    },
    thoughts:
      "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
    image_url:
      "https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80",
    github_url: "https://github.com/booshja/portfolio-v3-frontend",
    live_url: "https://jacobandes.dev",
    position: 2,
  },
  {
    id: 3,
    name: "Project 3",
    description:
      "This was a project that I really enjoyed doing. It was a project that projected to project very well!",
    tags: {
      tags: [
        "javascript",
        "react",
        "node",
        "express",
        "styled-components",
        "postgres",
      ],
    },
    thoughts:
      "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
    image_url:
      "https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80",
    github_url: "https://github.com/booshja/portfolio-v3-frontend",
    live_url: "https://jacobandes.dev",
    position: 3,
  },
  {
    id: 4,
    name: "Project 4",
    description:
      "This was a project that I really enjoyed doing. It was a project that projected to project very well!",
    tags: {
      tags: [
        "javascript",
        "react",
        "node",
        "express",
        "styled-components",
        "postgres",
      ],
    },
    thoughts:
      "This was a very challenging and rewarding project. It really forced me to think outside the box, and come up with new solutions to things I hadn't considered before. Pretty good. 8/10 I'd say.",
    image_url:
      "https://images.unsplash.com/photo-1614469723922-c043ad9fd036?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2709&q=80",
    github_url: "https://github.com/booshja/portfolio-v3-frontend",
    live_url: "https://jacobandes.dev",
    position: 4,
  },
];

const ProjectsContainer = styled(AdminPageContainer)`
  padding: 2rem;
`;

const ProjectsList = styled.ul`
  padding: 2rem;
`;

const Projects = () => {
  useEffect(() => {
    // console.log("Projects");
  }, []);
  return (
    <ProjectsContainer>
      <AdminHeadline>projects()</AdminHeadline>
      <ProjectsList>
        {dummyData.map((project) => (
          <ProjectItem project={project} />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  );
};

export default Projects;
