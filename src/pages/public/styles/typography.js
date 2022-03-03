// dependencies
import styled from "styled-components";

const MyName = styled.h1`
  font-size: 12rem;
  font-weight: 700;
  letter-spacing: 5%;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.textPrimary};
`;

const MyTitle = styled.p`
  font-size: 5rem;
  font-weight: 700;
  letter-spacing: 2.5%;
  color: ${(props) => props.theme.textSecondary};
`;

const PageTitle = styled.h1`
  color: ${(props) => props.theme.textPrimary};
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 4rem;
`;

export { MyName, MyTitle, PageTitle };
