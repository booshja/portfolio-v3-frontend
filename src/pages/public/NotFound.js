// dependencies
import React from "react";
import styled from "styled-components";
// components
import { Link } from "react-router-dom";
import { PageTitle } from "./styles/typography";
import { MainContent, PageContainer } from "./styles/containers";
import { Header, Socials, Copyright } from "../../components";
// assets
import SadIceCream from "../../assets/sad-ice-cream.jpeg";
import BugsSaysNo from "../../assets/bugs-bunnys-no.png";

const NotFoundContainer = styled(PageContainer)`
  background-color: ${(props) => props.theme.bgSecondary};
  min-height: 100vh;
  ${(props) => (props.wp ? "display: flex" : null)};
  ${(props) => (props.wp ? "align-items: center" : null)};
  ${(props) => (props.wp ? "justify-content: center" : null)};
  ${(props) => (props.wp ? "margin-top: 0" : null)};
  ${(props) => (props.wp ? "padding-top: 0" : null)};
`;

const NotFoundContent = styled(MainContent)`
  flex-direction: column;
  align-items: center;
`;

const NotFoundImg = styled.img`
  height: 75%;
  margin-top: 2rem;
`;

const BugsNoImg = styled.img`
  width: 50%;
  margin-bottom: 4rem;
`;

const NotFoundText = styled.p`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.textPrimary};
  margin: 2rem 0 1rem 2rem;
`;

const NotFoundLink = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  text-decoration: underline;
  color: ${(props) => props.theme.textSecondary};

  &:hover {
    filter: brightness(80%);
  }
`;

const NotFound = ({ nextTheme, wordPress }) => {
  if (wordPress) {
    return (
      <NotFoundContainer wp>
        <BugsNoImg src={BugsSaysNo} alt="Bugs bunny no meme" />
        <NotFoundLink to="/">Go Back</NotFoundLink>
      </NotFoundContainer>
    );
  }

  return (
    <>
      <Header notFound nextTheme={nextTheme} />
      <Socials />
      <Copyright />
      <NotFoundContainer>
        <PageTitle>notFound()</PageTitle>
        <NotFoundContent>
          <NotFoundText>Uh oh, couldn&apos;t find that&hellip;</NotFoundText>
          <NotFoundText>
            Click <NotFoundLink to="/">here</NotFoundLink> to go back home.
          </NotFoundText>
          <NotFoundImg
            src={SadIceCream}
            alt="Ice cream dropped on a stone slab"
          />
        </NotFoundContent>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
