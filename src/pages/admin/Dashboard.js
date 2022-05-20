// dependencies
import React from 'react';
import styled from 'styled-components';
// components
import { AdminHeadline } from './styles/typography';
import { AdminPageContainer } from './styles/containers';
import { LoadingSpinner } from '../../components';
// services
import {
  useGetMessagesQuery,
  useGetProjectsQuery,
} from '../../services/booshjaAPI';

const DashboardContainer = styled(AdminPageContainer)``;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  padding: 2rem;
`;

const Module = styled.div`
  border-radius: 6px;
  background-color: ${({ theme: t }) => t.bgSecondary};
  min-height: 20rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const ModuleHeader = styled.h3`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const ModuleSubHeader = styled.h4`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const ModuleText = styled.p`
  color: ${({ theme: t }) => t.textPrimary};
  font-size: 2rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const ModuleLink = styled.a`
  color: ${({ theme: t }) => t.textSecondary};
  font-size: 2rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const ProjectsModule = styled(Module)`
  grid-column: span 4;
`;

const ProjectLine = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  width: 100%;

  p {
    color: ${({ theme: t }) => t.textPrimary};
  }

  p:nth-of-type(1) {
    font-size: 2.2rem;
    width: 20%;
  }

  p:nth-of-type(2) {
    font-size: 2rem;
    width: 80%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Dashboard = () => {
  const {
    data: projectsData,
    isFetching: projectsIsFetching,
    isSuccess: projectsIsSuccess,
    isError: projectsIsError,
    error: projectsError,
  } = useGetProjectsQuery();
  const {
    data: messagesData,
    isFetching: messagesIsFetching,
    isSuccess: messagesIsSuccess,
    isError: messagesIsError,
    error: messagesError,
  } = useGetMessagesQuery();

  let projectsContent;
  let messagesContent;

  if (projectsIsFetching) {
    projectsContent = <LoadingSpinner />;
  } else if (projectsIsSuccess) {
    if (projectsData.projects.length) {
      projectsContent = projectsData.projects.slice(0, 10).map((project) => (
        <ProjectLine key={project.id}>
          <p>{project.name}</p>
          <p>{project.description}</p>
        </ProjectLine>
      ));
    } else {
      projectsContent = <ModuleText>No projects found!</ModuleText>;
    }
  } else if (projectsIsError) {
    projectsContent = <ModuleText>{projectsError.toString()}</ModuleText>;
  }

  if (messagesIsFetching) {
    messagesContent = <LoadingSpinner size={4} />;
  } else if (messagesIsSuccess) {
    messagesContent = (
      <>
        <ModuleText>New: {messagesData.active.length}</ModuleText>
        <ModuleText>Archived: {messagesData.archived.length}</ModuleText>
      </>
    );
  } else if (messagesIsError) {
    messagesContent = <ModuleText>{messagesError.toString()}</ModuleText>;
  }

  return (
    <DashboardContainer>
      <AdminHeadline>dashboard()</AdminHeadline>
      <MainContent>
        <Module>
          <ModuleHeader>Orders</ModuleHeader>
          <ModuleText>Pending: 0</ModuleText>
          <ModuleText>Confirmed: 4</ModuleText>
          <ModuleText>Completed: 20</ModuleText>
        </Module>
        <Module>
          <ModuleHeader>Messages</ModuleHeader>
          {messagesContent}
        </Module>
        <Module>
          <ModuleHeader>Analytics</ModuleHeader>
          <ModuleSubHeader>Unique Visitors:</ModuleSubHeader>
          <ModuleText>24 Hours: 43</ModuleText>
          <ModuleText>7 Days: 298</ModuleText>
          <ModuleText>30 Days: 1190</ModuleText>
        </Module>
        <Module>
          <ModuleHeader>Links</ModuleHeader>
          <ModuleLink href="https://auth0.com" target="_blank">
            auth0
          </ModuleLink>
          <ModuleLink href="https://stripe.com" target="_blank">
            Stripe
          </ModuleLink>
          <ModuleLink href="https://dashboard.chec.io/" target="_blank">
            Commerce.js
          </ModuleLink>
          <ModuleLink href="https://cloudflare.com" target="_blank">
            Cloudflare
          </ModuleLink>
          <ModuleLink href="https://heroku.com" target="_blank">
            Heroku
          </ModuleLink>
        </Module>
        <ProjectsModule>
          <ModuleHeader>Projects</ModuleHeader>
          {projectsContent}
        </ProjectsModule>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
