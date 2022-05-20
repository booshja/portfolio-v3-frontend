// dependencies
import React from 'react';
import styled from 'styled-components';
// components
import {
  PageContainer,
  MainContent,
  LeftSide as Left,
} from './styles/containers';
import {
  PageTitle,
  Hi,
  StoryGreeting,
  StoryLink,
  StoryText,
  SkillsHeader,
  SkillsList,
  Skill,
} from './styles/typography';
// assets
import Headshot from '../../assets/headshot.jpg';

const AboutContainer = styled(PageContainer)`
  background-color: ${({ theme: t }) => t.bgPrimary};
`;

const LeftSide = styled(Left)`
  width: 70%;
`;

const RightSide = styled.div`
  display: flex;
  width: 30%;
  margin-bottom: 5rem;
  padding-top: 10rem;
`;

const About = () => (
  <AboutContainer>
    <PageTitle>about()</PageTitle>
    <MainContent className="slide-in-left">
      <LeftSide>
        <StoryGreeting>
          <Hi>Hi! </Hi>
          I&apos;m Jacob!
        </StoryGreeting>
        <StoryText>
          I&apos;m a Full Stack Software Engineer from Seattle, WA. I&apos;m
          currently building the future of medical supply with&nbsp;
          <StoryLink
            href="https://bttnusa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            bttn
          </StoryLink>
          . I love finding creative solutions to complex problems and creating
          beautiful, reliable, and responsive web applications.
        </StoryText>
        <StoryText>
          When I&apos;m not coding, you can find me spending time with my&nbsp;
          {/* <StoryLink
              href="https://paintingjoy.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              partner
            </StoryLink> */}
          partner &nbsp;and dogs, listening to music, going to see live music,
          reading, watching hockey, or clumsily playing hockey in the Kraken
          Hockey League.
        </StoryText>
        <SkillsHeader>Skills:</SkillsHeader>
        <SkillsList>
          <Skill>JavaScript</Skill>
          <Skill>Node</Skill>
          <Skill>React</Skill>
          <Skill>Redux</Skill>
          <Skill>RTK Query</Skill>
          <Skill>Styled-Components</Skill>
          <Skill>Express</Skill>
          <Skill>MongoDB</Skill>
          <Skill>Python</Skill>
          <Skill>Flask</Skill>
          <Skill>PostgreSQL</Skill>
          <Skill>jQuery</Skill>
          <Skill>Figma</Skill>
          <Skill>ClickUp</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>SASS/SCSS</Skill>
          <Skill>SQL</Skill>
          <Skill>Heroku</Skill>
          <Skill>GitHub</Skill>
        </SkillsList>
      </LeftSide>
      <RightSide>
        <img
          src={Headshot}
          alt="Jacob smiling in front of an abstact, brightly colored cloud mural by Painting Joy Mural Co."
        />
      </RightSide>
    </MainContent>
  </AboutContainer>
);

export default About;
