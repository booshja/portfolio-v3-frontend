// dependencies
import React from "react";
import styled from "styled-components";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// assets
import { faHockeyPuck } from "@fortawesome/free-solid-svg-icons";

const SpinnerContainer = styled.div`
  font-size: 8rem;
  color: ${(props) => props.theme.textPrimary};
`;

const LoadingSpinner = () => (
  <SpinnerContainer>
    <FontAwesomeIcon icon={faHockeyPuck} spin />
  </SpinnerContainer>
);

export default LoadingSpinner;
