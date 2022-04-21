// dependencies
import React from "react";
import { v4 as randomId } from "uuid";
import styled from "styled-components";

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 2rem;
`;

const ProjectName = styled.h1`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const TextColumn = styled.div`
  width: 100%;
`;

const ImageColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2rem;
  line-height: 1.5;
  margin: 0 0 1rem 1rem;
`;

const Title = styled.h3`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const TagContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
`;

const TagText = styled.li`
  font-size: 2rem;
  border-radius: 12px;
  background-color: ${({ theme: t }) => t.accent};
  color: ${({ theme: t }) => t.bgPrimary};
  padding: 0.5rem 1rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

const ProjectImg = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

const EditButton = styled.button`
  border-radius: 4px;
  border: 2px solid ${({ theme: t }) => t.buttonGreen};
  color: ${({ theme: t }) => t.buttonGreen};
  background-color: ${({ theme: t }) => t.bgPrimary};
  font-size: 2rem;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${({ theme: t }) => t.bgPrimary};
    background-color: ${({ theme: t }) => t.buttonGreen};
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  border-radius: 4px;
  border: 2px solid ${({ theme: t }) => t.red};
  color: ${({ theme: t }) => t.red};
  background-color: ${({ theme: t }) => t.bgPrimary};
  font-size: 2rem;
  padding: 0.5rem 1rem;

  &:hover {
    color: ${({ theme: t }) => t.bgPrimary};
    background-color: ${({ theme: t }) => t.red};
    cursor: pointer;
  }
`;

const BackLink = styled.p`
  color: ${({ theme: t }) => t.accent};
  font-size: 2.5rem;
  margin-bottom: 1rem;
  margin-left: -0.5rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Project = ({ project }) => (
  <ProjectContainer>
    <TextColumn>
      <BackLink>&lt; Back</BackLink>
      <ProjectName>{project.name}</ProjectName>
      <Title>Description: </Title>
      <ProjectText>{project.description}</ProjectText>
      <Title>Thoughts: </Title>
      <ProjectText>{project.thoughts}</ProjectText>
      <Title>GitHub URL:</Title>
      <ProjectText>{project.githubUrl}</ProjectText>
      <Title>Live URL:</Title>
      <ProjectText>{project.liveUrl}</ProjectText>
      <Title>Tags:</Title>
      <TagContainer>
        {project.tags.tags.map((tag) => (
          <TagText key={randomId()}>{tag}</TagText>
        ))}
      </TagContainer>
    </TextColumn>
    <ImageColumn>
      <ProjectImg src={project.imageUrl} />
      <ButtonContainer>
        <EditButton>Edit Project</EditButton>
        <DeleteButton>Delete Project</DeleteButton>
      </ButtonContainer>
    </ImageColumn>
  </ProjectContainer>
);

export default Project;
