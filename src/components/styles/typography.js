// dependencies
import styled from "styled-components";
// components
import { Link, NavLink } from "react-router-dom";

/** Links ********************************************** */
const WebsiteName = styled(Link)`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 2rem;
  flex-basis: 25%;
  text-decoration: none;
  color: ${(props) => props.theme.textPrimary};
`;

const StyledNavLink = styled(NavLink)`
  font-family: Sen, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme.textPrimary};

  &.active {
    font-weight: 700;
    font-size: 2rem;
  }
`;

/** Headers ******************************************** */

/** Text *********************************************** */
const FollowMe = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 2rem;
  transform: rotate(-90deg);
  width: 100px;
  margin-top: 4rem;
`;

const CopyrightText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 1.2rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const LoadingText = styled.p`
  color: ${(props) => props.theme.textPrimary};
  font-size: 3rem;
  margin-top: 2rem;
`;

export { WebsiteName, StyledNavLink, FollowMe, CopyrightText, LoadingText };
