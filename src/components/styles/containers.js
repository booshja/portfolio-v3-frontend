// dependencies
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  padding: 0 3rem 0 3rem;
  background-color: transparent;
  color: ${(props) => props.theme.textPrimary};
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
`;

const SocialsContainer = styled.aside`
  position: absolute;
  left: 1rem;
  top: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 40px;
  padding: 1rem 0 5rem 0;
  background-color: transparent;

  a {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.textPrimary};

    &:hover,
    &:focus {
      filter: brightness(90%);
    }
  }
`;

/** Accent Div's *************************************** */
const VerticalAccentDiv = styled.div`
  width: 2px;
  height: 200px;
  background-color: ${(props) => props.theme.accent};
  margin-bottom: 2rem;
`;

export { HeaderContainer, Nav, SocialsContainer, VerticalAccentDiv };
