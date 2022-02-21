// dependencies
import React from "react";
import styled from "styled-components";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialsContainer, VerticalAccentDiv } from "./styles/containers";
import { FollowMe } from "./styles/typography";
// assets
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <SocialsContainer>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faLinkedin} />
      <VerticalAccentDiv />
      <FollowMe>Follow Me</FollowMe>
    </SocialsContainer>
  );
};

export default Socials;
