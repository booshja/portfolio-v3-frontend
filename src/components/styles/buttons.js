// dependencies
import styled from 'styled-components';

const NavButton = styled.button`
  font-size: 1.8rem;
  background-color: transparent;
  color: ${({ theme: t }) => t.textPrimary};
  border: none;
  margin-left: 0.75rem;

  svg {
    color: ${({ theme: t }) => t.textPrimary};
  }

  &:hover,
  :focus {
    cursor: pointer;
  }
`;

const OtherButton = styled.button`
  background-color: transparent;
`;

export { NavButton, OtherButton };
