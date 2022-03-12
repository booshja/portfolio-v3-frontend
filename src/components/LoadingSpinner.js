// dependencies
import React from "react";
// assets
import { faPaw } from "@fortawesome/free-solid-svg-icons";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingText } from "./styles/typography";
import { SpinnerContainer } from "./styles/containers";

const LoadingSpinner = () => (
  <SpinnerContainer>
    <FontAwesomeIcon icon={faPaw} spin />
    <LoadingText>Loading&hellip;</LoadingText>
  </SpinnerContainer>
);

export default LoadingSpinner;
