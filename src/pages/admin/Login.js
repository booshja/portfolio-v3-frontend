// dependencies
import React from "react";
import styled, { ThemeProvider } from "styled-components";
// components
import { Link } from "react-router-dom";
import { Copyright } from "../../components";
// styles
import { adminTheme } from "../../styles/themes";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgPrimary};
`;

const LoginBox = styled.div`
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 8px;
  width: 25%;
  height: 25%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2.5px 2.5px 2.5px ${(props) => props.theme.black};
`;

const LoginHeader = styled(Link)`
  color: ${(props) => props.theme.textPrimary};
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  cursor: default;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const LoginButton = styled(Link)`
  font-size: 2rem;
  background-color: ${(props) => props.theme.bgPrimary};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  line-height: 1.5;
  box-shadow: 2.5px 2.5px 2.5px ${(props) => props.theme.bgPrimary};

  &:hover {
    color: ${(props) => props.theme.bgPrimary};
    border: 2px solid ${(props) => props.theme.bgPrimary};
  }
`;

const LoginBtn = styled(LoginButton)`
  color: ${(props) => props.theme.buttonGreen};
  border: 2px solid ${(props) => props.theme.buttonGreen};

  &:hover {
    background-color: ${(props) => props.theme.buttonGreen};
  }
`;

const CancelBtn = styled(LoginButton)`
  color: ${(props) => props.theme.red};
  border: 2px solid ${(props) => props.theme.red};

  &:hover {
    background-color: ${(props) => props.theme.red};
  }
`;

const Login = () => (
  <ThemeProvider theme={adminTheme}>
    <LoginContainer>
      <LoginBox>
        <LoginHeader to="https://www.auth0.com">Log In</LoginHeader>
        <ButtonContainer>
          <LoginBtn to="/">Log In</LoginBtn>
          <CancelBtn to="/">Cancel</CancelBtn>
        </ButtonContainer>
      </LoginBox>
      <Copyright />
    </LoginContainer>
  </ThemeProvider>
);

export default Login;
