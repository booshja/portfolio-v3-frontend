// dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
// assets
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  PageContainer,
  MainContent,
  ExpLeft,
  ExpRight,
  ExpCard,
  ExpCardBack,
  ExpCardFront,
  ExpCardInner,
  Screencap,
} from "./styles/containers";
import { LoadingSpinner } from "../../components";
import {
  PageTitle,
  ExpList,
  ExpItem,
  ExpItemName,
  ExpItemText,
  Tag,
  TagList,
  ExpCardLink,
} from "./styles/typography";

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

const Experience = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("loading");
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <ExpContainer>
        <PageTitle>experience()</PageTitle>
        <MainContent className="center">
          <LoadingSpinner />
        </MainContent>
      </ExpContainer>
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
