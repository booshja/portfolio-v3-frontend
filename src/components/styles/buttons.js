// dependencies
import styled from "styled-components";

const NavButton = styled.button`
  font-size: 1.8rem;
  background-color: transparent;
  color: ${(props) => props.theme.textPrimary};
  border: none;
  margin-left: 0.75rem;

  svg {
    color: ${(props) => props.theme.textPrimary};
  }

  &:hover,
  :focus {
    cursor: pointer;
  }
`;

export { NavButton };
