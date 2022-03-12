// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import {
  PageContainer,
  MainContent,
  LeftSide as Left,
  RightSide as Right,
} from "./styles/containers";
import { PageTitle } from "./styles/typography";
// assets
import Headshot from "../../assets/headshot.jpg";
import { LoadingSpinner } from "../../components";

const AboutContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgPrimary};
`;

const LeftSide = styled(Left)`
  width: 70%;
  z-index: 2;
`;

const RightSide = styled(Right)`
  width: 20%;
  margin-bottom: 5rem;
  z-index: 1;
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

const Me = styled.img``;

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading");
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <MainContent>
        <LoadingSpinner />
      </MainContent>
    );
  }

  return (
    <AboutContainer id="AboutContainer">
      <PageTitle>about()</PageTitle>
      <MainContent id="MainContent" className="slide-in-left">
        <LeftSide id="LeftSide">
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
            When I&apos;m not coding, you can find me spending time with
            my&nbsp;
            <StoryLink
              href="https://paintingjoy.art"
              target="_blank"
              rel="noopener noreferrer"
            >
              partner
            </StoryLink>
            &nbsp; and dogs, reading, watching hockey, or clumsily playing
            hockey in the Kraken Hockey League.
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
          <Me
            src={Headshot}
            alt="Jacob smiling in front of an abstact, brightly colored cloud mural by Painting Joy Mural Co."
          />
        </RightSide>
      </MainContent>
    </AboutContainer>
  );
};

export default About;
