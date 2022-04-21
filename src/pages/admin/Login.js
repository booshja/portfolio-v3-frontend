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
  background-color: ${({ theme: t }) => t.bgPrimary};
`;

const LoginBox = styled.div`
  background-color: ${({ theme: t }) => t.bgSecondary};
  border-radius: 8px;
  width: 25%;
  height: 25%;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2.5px 2.5px 2.5px ${({ theme: t }) => t.black};
`;

const LoginHeader = styled.a`
  color: ${({ theme: t }) => t.textPrimary};
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
  background-color: ${({ theme: t }) => t.bgPrimary};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  line-height: 1.5;
  box-shadow: 2.5px 2.5px 2.5px ${({ theme: t }) => t.bgPrimary};

  &:hover {
    color: ${({ theme: t }) => t.bgPrimary};
    border: 2px solid ${({ theme: t }) => t.bgPrimary};
  }
`;

const LoginBtn = styled(LoginButton)`
  color: ${({ theme: t }) => t.buttonGreen};
  border: 2px solid ${({ theme: t }) => t.buttonGreen};

  &:hover {
    background-color: ${({ theme: t }) => t.buttonGreen};
  }
`;

const CancelBtn = styled(LoginButton)`
  color: ${({ theme: t }) => t.red};
  border: 2px solid ${({ theme: t }) => t.red};

  &:hover {
    background-color: ${({ theme: t }) => t.red};
  }
`;

const Login = () => (
  <ThemeProvider theme={adminTheme}>
    <LoginContainer>
      <LoginBox>
        <LoginHeader href="https://www.auth0.com">Log In</LoginHeader>
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
