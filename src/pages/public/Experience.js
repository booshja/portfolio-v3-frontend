// dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
// assets
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PageContainer, MainContent } from "./styles/containers";
import { LoadingSpinner } from "../../components";
import { PageTitle } from "./styles/typography";

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

const ExpContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgSecondary};
  height: 100%;
  min-height: 100vh;
`;

const ExpList = styled.ul`
  color: ${(props) => props.theme.textPrimary};
  margin-top: 2rem;
  padding-left: 2rem;
`;

const ExpItemName = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: -1rem;
`;

const ExpItemText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 1rem;

  span {
    font-size: inherit;
    font-style: italic;
    font-weight: 700;
  }
`;

const Screencap = styled.img`
  width: 198px;
`;

const ExpLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

const ExpRight = styled.div`
  display: flex;
  width: 30%;
`;

const ExpCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin-left: 2rem;
`;

const ExpCard = styled.div`
  background-color: transparent;
  width: 400px;
  height: 300px;
  perspective: 1000px;
  margin-left: 2rem;

  &:hover ${ExpCardInner} {
    transform: rotateY(180deg);
  }
`;

const ExpCardBack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme.bgCard};
  color: ${(props) => props.theme.textCard};
  transform: rotateY(180deg);
  position: absolute;
  width: 300px;
  height: 300px;
  backface-visibility: hidden;
  padding: 10% 7.5% 30% 7.5%;
  border: ${(props) =>
    props.theme.themeName === "Light" ? "2px solid #000000" : "none"};

  & a:nth-of-type(1) {
    margin-bottom: 3rem;
  }
`;

const ExpCardLink = styled.a`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 3.5rem;
    margin-right: 1.25rem;
  }

  &:hover {
    font-style: italic;
  }
`;

const ExpCardFront = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgSecondary};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const ExpItem = styled.li`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.8rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  min-height: 300px;
`;

const TagList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 1rem;
`;

const Tag = styled.li`
  border-radius: 15px;
  background-color: ${(props) => props.theme.bgCard};
  color: ${(props) => props.theme.bgPrimary};
  ${(props) => props.theme.themeName === "Light" && "color: #000000;"};
  border: ${(props) =>
    props.theme.themeName === "Light" ? "2px solid #000000" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  padding: 0.75rem 1.5rem;
  margin: 0 2rem 2rem 0;
`;

const Experience = () => {
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
    <ExpContainer>
      <PageTitle>experience()</PageTitle>
      <MainContent className="slide-in-left">
        <ExpList>
          {dummyData.map((item) => (
            <ExpItem key={item.position}>
              <ExpLeft>
                <ExpItemName>{item.name}:</ExpItemName>
                <ExpItemText>
                  <span>description: </span> {item.description}
                </ExpItemText>
                <ExpItemText>
                  <span>thoughts: </span> {item.thoughts}
                </ExpItemText>
                <TagList>
                  {item.tags.tags.map((tag) => (
                    <Tag key={uuid()}>{tag}</Tag>
                  ))}
                </TagList>
              </ExpLeft>
              <ExpRight>
                <ExpCard>
                  <ExpCardInner>
                    <ExpCardFront>
                      <Screencap
                        src={item.image_url}
                        alt={`${item.name} screen capture.`}
                      />
                    </ExpCardFront>
                    <ExpCardBack>
                      <ExpCardLink href={item.github_url}>
                        <span>
                          <FontAwesomeIcon icon={faGithub} />
                        </span>
                        View on GitHub
                      </ExpCardLink>
                      {item?.live_url && (
                        <ExpCardLink href={item.live_url}>
                          <span>
                            <FontAwesomeIcon icon={faLaptop} />
                          </span>
                          View Live Website
                        </ExpCardLink>
                      )}
                    </ExpCardBack>
                  </ExpCardInner>
                </ExpCard>
              </ExpRight>
            </ExpItem>
          ))}
        </ExpList>
      </MainContent>
    </ExpContainer>
  );
};

export default Experience;
