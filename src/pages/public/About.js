// dependencies
import React from "react";
import styled from "styled-components";
// components
import {
  PageContainer,
  MainContent,
  LeftSide,
  RightSide,
} from "./styles/containers";
import { PageTitle } from "./styles/typography";

const AboutContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
  /* padding-bottom: 2rem; */
`;

const Hi = styled.span`
  color: inherit;
  font-weight: 700;
  font-size: 2.8rem;
  font-family: Poppins, sans-serif;
`;

const StoryGreeting = styled.h2`
  color: ${(props) => props.theme.textPrimary};
  font-size: 3rem;
  margin: 3rem 0 1rem 0;
`;

const StoryText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  margin: 1rem 0 1rem 2rem;
  line-height: 1.5;
  background: transparent;
`;

const StoryLink = styled.a`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  font-weight: 700;
  text-decoration: underline;

  &:hover {
    filter: brightness(60%);
  }
`;

const SkillsHeader = styled.h2`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2.6rem;
  font-weight: 700;
  margin: 2rem 0;
`;

const SkillsList = styled.ul`
  padding-left: 2rem;
  height: 40%;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Skill = styled.li`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  margin: 1rem 0;
`;

// const Me = styled.img`
//   height: 100%;
// `;

const About = () => {
  return (
    <AboutContainer id="AboutContainer">
      <PageTitle>about()</PageTitle>
      <MainContent id="MainContent" className="slide-in-left">
        <LeftSide id="LeftSide">
          <StoryGreeting>
            <Hi>Hi!</Hi> I'm Jacob!
          </StoryGreeting>
          <StoryText>
            I'm a Full Stack Software Engineer from Seattle, WA. I'm currently
            building the future of medical supply with{" "}
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
            When I'm not coding, you can find me spending time with my{" "}
            <StoryLink
              href="https://paintingjoy.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              partner
            </StoryLink>{" "}
            and dogs, reading, watching hockey, or clumsily playing hockey in
            the Kraken Hockey League.
          </StoryText>
          <SkillsHeader>Skills:</SkillsHeader>
          <SkillsList>
            <Skill>JavaScript</Skill>
            <Skill>Node</Skill>
            <Skill>React</Skill>
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
          {/* <Me
            src=""
            alt="Jacob smiling in front of an abstact, brightly colored cloud mural by Painting Joy Mural Co."
          /> */}
        </RightSide>
      </MainContent>
    </AboutContainer>
  );
};

export default About;
